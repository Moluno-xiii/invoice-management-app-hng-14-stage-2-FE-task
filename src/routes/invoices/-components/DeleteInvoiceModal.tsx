import Button from "@/components/shared/Button";
import { useEffect } from "react";

interface Props {
  invoiceId: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteInvoiceModal: React.FC<Props> = ({
  invoiceId,
  open,
  onClose,
  onConfirm,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-invoice-title"
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />
      <div className="bg-tile relative z-10 flex w-full max-w-120 flex-col gap-y-3 rounded-lg p-12">
        <h2
          id="delete-invoice-title"
          className="text-text text-2xl font-bold tracking-[-0.5px]"
        >
          Confirm Deletion
        </h2>
        <p className="text-text-accent text-sml leading-4.5 font-medium tracking-[-0.1px]">
          Are you sure you want to delete invoice #{invoiceId}? This action
          cannot be undone.
        </p>
        <div className="mt-4 flex flex-row items-center justify-end gap-x-2">
          <Button
            variant="inverse"
            size="small"
            text="Cancel"
            onClick={onClose}
          />
          <Button
            variant="error"
            size="small"
            text="Delete"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteInvoiceModal;
