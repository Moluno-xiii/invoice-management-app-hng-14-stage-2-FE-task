import type { ReactNode } from "react";

const PillLabel: React.FC<{
  children: ReactNode;
  dotColor?: string;
  dark?: boolean;
}> = ({ children, dotColor = "bg-primary", dark }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold tracking-[2.5px] uppercase ${
      dark
        ? "border-white/15 text-[#DFE3FA]"
        : "border-input-border text-text-accent"
    }`}
  >
    <span className={`size-1.5 animate-pulse rounded-full ${dotColor}`} />
    {children}
  </span>
);

export default PillLabel;
