import Button from "@/components/shared/Button";
import useCreateInvoice from "@/hooks/tanstack/useCreateInvoice";
import { flattenIssues, type InvoiceFormErrors } from "@/lib/form-errors";
import { InvoiceFormValueSchema } from "@/lib/schemas";
import type { Address, Invoice, InvoiceFormValue } from "@/types";
import { useState, type Dispatch, type SetStateAction } from "react";
import DiscardInvoiceModal from "./DiscardInvoiceModal";
import InvoiceForm from "./InvoiceForm";
import InvoiceFormDialog from "./InvoiceFormDialog";

interface Props {
  newValue: InvoiceFormValue;
  setNewValue: Dispatch<SetStateAction<InvoiceFormValue>>;
  setIsCreateNewFormOpen: Dispatch<SetStateAction<boolean>>;
}

const addressTouched = (address: Address) =>
  Object.values(address).some((v) => v.trim() !== "");

const isFormDirty = (value: InvoiceFormValue) =>
  value.clientName.trim() !== "" ||
  value.clientEmail.trim() !== "" ||
  value.description.trim() !== "" ||
  value.items.length > 0 ||
  addressTouched(value.senderAddress) ||
  addressTouched(value.clientAddress);

const CreateInvoiceForm: React.FC<Props> = ({
  newValue,
  setNewValue,
  setIsCreateNewFormOpen,
}) => {
  const [errors, setErrors] = useState<InvoiceFormErrors | undefined>();
  const [isDiscardOpen, setIsDiscardOpen] = useState(false);
  const createInvoice = useCreateInvoice();

  const submit = (status: Invoice["status"]) => {
    const result = InvoiceFormValueSchema.safeParse(newValue);
    if (!result.success) {
      setErrors(flattenIssues(result.error));
      return;
    }
    setErrors(undefined);
    createInvoice.mutate(
      { value: result.data, status },
      {
        onSuccess: () => {
          setIsDiscardOpen(false);
          setIsCreateNewFormOpen(false);
        },
      },
    );
  };

  const close = () => setIsCreateNewFormOpen(false);

  const handleDiscardClick = () => {
    if (isFormDirty(newValue)) {
      setIsDiscardOpen(true);
    } else {
      close();
    }
  };

  const saving = createInvoice.isPending;

  return (
    <InvoiceFormDialog
      title="New Invoice"
      onClose={handleDiscardClick}
      footer={
        <>
          <Button
            variant="inverse"
            size="small"
            text="Discard"
            onClick={handleDiscardClick}
            disabled={saving}
          />
          <Button
            variant="dark"
            size="small"
            text={saving ? "Saving…" : "Save as Draft"}
            onClick={() => submit("draft")}
            disabled={saving}
          />
          <Button
            variant="default"
            size="small"
            text={saving ? "Saving…" : "Save & Send"}
            onClick={() => submit("pending")}
            disabled={saving}
          />
        </>
      }
    >
      {createInvoice.isError && (
        <p
          role="alert"
          className="text-error bg-error-soft/15 text-sml mb-6 rounded-md px-4 py-3 font-medium tracking-[-0.1px]"
        >
          {createInvoice.error instanceof Error
            ? createInvoice.error.message
            : "Couldn't save invoice. Try again."}
        </p>
      )}
      <InvoiceForm value={newValue} onChange={setNewValue} errors={errors} />

      <DiscardInvoiceModal
        open={isDiscardOpen}
        saving={saving}
        onCancel={() => setIsDiscardOpen(false)}
        onDiscard={() => {
          setIsDiscardOpen(false);
          close();
        }}
        onSaveAsDraft={() => submit("draft")}
      />
    </InvoiceFormDialog>
  );
};

export default CreateInvoiceForm;
