import type { Dispatch, SetStateAction } from "react";
import InvoiceFormDialog from "./InvoiceFormDialog";
import type { InvoiceFormValue } from "@/types";
import Button from "@/components/shared/Button";
import InvoiceForm from "./InvoiceForm";

interface Props {
  newValue: InvoiceFormValue;
  setNewValue: Dispatch<SetStateAction<InvoiceFormValue>>;
  setIsCreateNewFormOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateInvoiceForm: React.FC<Props> = ({
  newValue,
  setNewValue,
  setIsCreateNewFormOpen,
}) => {
  return (
    <InvoiceFormDialog
      title="New Invoice"
      onClose={() => setIsCreateNewFormOpen(false)}
      footer={
        <>
          <Button
            variant="inverse"
            size="small"
            text="Discard"
            onClick={() => setIsCreateNewFormOpen(false)}
          />
          <Button
            variant="dark"
            size="small"
            text="Save as Draft"
            onClick={() => setIsCreateNewFormOpen(false)}
          />
          <Button
            variant="default"
            size="small"
            text="Save & Send"
            onClick={() => setIsCreateNewFormOpen(false)}
          />
        </>
      }
    >
      <InvoiceForm value={newValue} onChange={setNewValue} />
    </InvoiceFormDialog>
  );
};

export default CreateInvoiceForm;
