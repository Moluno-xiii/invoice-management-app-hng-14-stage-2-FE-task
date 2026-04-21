import Button from "@/components/shared/Button";
import { useEffect } from "react";

interface Props {
  open: boolean;
  saving: boolean;
  onCancel: () => void;
  onDiscard: () => void;
  onSaveAsDraft: () => void;
}

const DiscardInvoiceModal: React.FC<Props> = ({
  open,
  saving,
  onCancel,
  onDiscard,
  onSaveAsDraft,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="discard-invoice-title"
      className="fixed inset-0 z-[60] flex items-center justify-center px-6"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onCancel}
        className="absolute inset-0 bg-black/50"
      />
      <div className="bg-tile relative z-10 flex w-full max-w-120 flex-col gap-y-3 rounded-lg p-12">
        <h2
          id="discard-invoice-title"
          className="text-text text-2xl font-bold tracking-[-0.5px]"
        >
          Discard this invoice?
        </h2>
        <p className="text-text-accent text-sml leading-4.5 font-medium tracking-[-0.1px]">
          You've started filling this invoice out. If you'd rather keep your
          work, you can save it as a draft and finish later.
        </p>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
          <Button
            variant="inverse"
            size="small"
            text="Keep editing"
            onClick={onCancel}
            disabled={saving}
          />
          <Button
            variant="error"
            size="small"
            text="Discard"
            onClick={onDiscard}
            disabled={saving}
          />
          <Button
            variant="default"
            size="small"
            text={saving ? "Saving…" : "Save as Draft"}
            onClick={onSaveAsDraft}
            disabled={saving}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscardInvoiceModal;
