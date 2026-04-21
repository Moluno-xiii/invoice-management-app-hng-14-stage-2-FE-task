import Button from "@/components/shared/Button";
import useUpdateInvoice from "@/hooks/tanstack/useUpdateInvoice";
import { flattenIssues, type InvoiceFormErrors } from "@/lib/form-errors";
import { InvoiceFormValueSchema } from "@/lib/schemas";
import type { InvoiceFormValue } from "@/types";
import { useState, type Dispatch, type SetStateAction } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceFormDialog from "./InvoiceFormDialog";

interface Props {
  invoiceId: string;
  editValue: InvoiceFormValue;
  setIsEditOpen: Dispatch<SetStateAction<boolean>>;
  setEditValue: Dispatch<SetStateAction<InvoiceFormValue>>;
}

const EditInvoiceForm: React.FC<Props> = ({
  invoiceId,
  editValue,
  setIsEditOpen,
  setEditValue,
}) => {
  const [errors, setErrors] = useState<InvoiceFormErrors | undefined>();
  const updateInvoice = useUpdateInvoice();

  const submit = () => {
    const result = InvoiceFormValueSchema.safeParse(editValue);
    if (!result.success) {
      setErrors(flattenIssues(result.error));
      return;
    }
    setErrors(undefined);
    updateInvoice.mutate(
      { id: invoiceId, value: result.data },
      { onSuccess: () => setIsEditOpen(false) },
    );
  };

  const saving = updateInvoice.isPending;

  return (
    <InvoiceFormDialog
      title={
        <>
          Edit <span className="text-text-accent">#</span>
          {invoiceId}
        </>
      }
      onClose={() => setIsEditOpen(false)}
      footer={
        <>
          <Button
            variant="inverse"
            size="small"
            text="Cancel"
            onClick={() => setIsEditOpen(false)}
            disabled={saving}
          />
          <Button
            variant="default"
            size="small"
            text={saving ? "Saving…" : "Save Changes"}
            onClick={submit}
            disabled={saving}
          />
        </>
      }
    >
      {updateInvoice.isError && (
        <p
          role="alert"
          className="text-error bg-error-soft/15 text-sml mb-6 rounded-md px-4 py-3 font-medium tracking-[-0.1px]"
        >
          {updateInvoice.error instanceof Error
            ? updateInvoice.error.message
            : "Couldn't save changes. Try again."}
        </p>
      )}
      <InvoiceForm value={editValue} onChange={setEditValue} errors={errors} />
    </InvoiceFormDialog>
  );
};

export default EditInvoiceForm;
