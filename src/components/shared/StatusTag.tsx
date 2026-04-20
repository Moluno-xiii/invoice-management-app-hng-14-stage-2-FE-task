import type { InvoicePaymentStatus } from "@/types";

interface Props {
  status: InvoicePaymentStatus;
  className?: string;
}

const styles: Record<
  InvoicePaymentStatus,
  { bg: string; fg: string; label: string }
> = {
  paid: {
    bg: "bg-status-paid-bg",
    fg: "text-status-paid",
    label: "Paid",
  },
  pending: {
    bg: "bg-status-pending-bg",
    fg: "text-status-pending",
    label: "Pending",
  },
  draft: {
    bg: "bg-status-draft-bg",
    fg: "text-status-draft-fg",
    label: "Draft",
  },
};

const StatusTag: React.FC<Props> = ({ status, className = "" }) => {
  const style = styles[status];

  return (
    <div
      className={`${style.bg} ${style.fg} inline-flex h-10 w-26 flex-row items-center justify-center gap-x-2 rounded-md ${className}`}
      role="status"
      aria-label={style.label}
    >
      <span className="inline-block size-2 rounded-full bg-current" />
      <span className="text-nm font-bold tracking-[-0.25px]">
        {style.label}
      </span>
    </div>
  );
};

export default StatusTag;
