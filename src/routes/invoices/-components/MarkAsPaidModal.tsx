import Button from "@/components/shared/Button";
import { useMarkInvoiceAsPaid } from "@/hooks/tanstack/useUpdateInvoice";
import { useEffect } from "react";

interface Props {
  invoiceId: string;
  open: boolean;
  onClose: () => void;
}

const MarkAsPaidModal: React.FC<Props> = ({ invoiceId, open, onClose }) => {
  const markAsPaid = useMarkInvoiceAsPaid();

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

  const confirm = () => {
    markAsPaid.mutate(invoiceId, { onSuccess: onClose });
  };

  const pending = markAsPaid.isPending;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mark-paid-title"
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
          id="mark-paid-title"
          className="text-text text-2xl font-bold tracking-[-0.5px]"
        >
          Mark as Paid?
        </h2>
        <p className="text-text-accent text-sml leading-4.5 font-medium tracking-[-0.1px]">
          This will change invoice #{invoiceId} to <b>Paid</b>. You can still
          edit the invoice afterwards.
        </p>
        {markAsPaid.isError && (
          <p
            role="alert"
            className="text-error text-sml font-medium tracking-[-0.1px]"
          >
            {markAsPaid.error instanceof Error
              ? markAsPaid.error.message
              : "Couldn't update invoice. Try again."}
          </p>
        )}
        <div className="mt-4 flex flex-row items-center justify-end gap-x-2">
          <Button
            variant="inverse"
            size="small"
            text="Cancel"
            onClick={onClose}
            disabled={pending}
          />
          <Button
            variant="default"
            size="small"
            text={pending ? "Saving…" : "Mark as Paid"}
            onClick={confirm}
            disabled={pending}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkAsPaidModal;
