import type { Dispatch, SetStateAction } from "react";
import InvoiceFormDialog from "./InvoiceFormDialog";
import Button from "@/components/shared/Button";
import InvoiceForm from "./InvoiceForm";
import type { InvoiceFormValue } from "@/types";

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
          />
          <Button
            variant="default"
            size="small"
            text="Save Changes"
            onClick={() => setIsEditOpen(false)}
          />
        </>
      }
    >
      <InvoiceForm value={editValue} onChange={setEditValue} />
    </InvoiceFormDialog>
  );
};

export default EditInvoiceForm;
