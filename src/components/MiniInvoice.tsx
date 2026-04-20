import type { InvoicePaymentStatus } from "@/types";
import StatusTag from "./shared/StatusTag";
import type { CSSProperties } from "react";

type MiniInvoiceProps = {
  id: string;
  client: string;
  description: string;
  amount: string;
  status: InvoicePaymentStatus;
  rotation: number;
  animDelay: string;
  className?: string;
};

const MiniInvoiceComponent: React.FC<MiniInvoiceProps> = ({
  id,
  client,
  description,
  amount,
  status,
  rotation,
  animDelay,
  className = "",
}) => (
  <div
    className={`bg-tile border-input-border/60 w-[320px] rounded-2xl border p-6 shadow-[0_24px_60px_-20px_rgba(72,84,159,0.45)] sm:w-[360px] ${className}`}
    style={
      {
        animation: `fade-up 0.9s ease ${animDelay} backwards, float-card 6s ease-in-out ${animDelay} infinite`,
        "--rot": `${rotation}deg`,
        transform: `rotate(${rotation}deg)`,
      } as CSSProperties
    }
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-y-1">
        <p className="text-text text-[17px] font-bold tracking-[-0.3px]">
          <span className="text-text-accent">#</span>
          {id}
        </p>
        <p className="text-text-accent text-[11px] font-medium tracking-[-0.15px] uppercase">
          {description}
        </p>
      </div>
      <StatusTag status={status} />
    </div>

    <div className="bg-input-border/40 mt-6 h-px w-full" />

    <div className="mt-5 flex items-end justify-between">
      <div>
        <p className="text-text-accent text-[11px] font-medium tracking-[-0.15px] uppercase">
          Billed to
        </p>
        <p className="text-text mt-1 text-[14px] font-bold tracking-[-0.2px]">
          {client}
        </p>
      </div>
      <p className="text-text text-2xl font-bold tracking-[-0.6px]">{amount}</p>
    </div>
  </div>
);

export default MiniInvoiceComponent;
