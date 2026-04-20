import type { ReactNode } from "react";
import { FaBolt, FaChartLine, FaFilter, FaPenToSquare } from "react-icons/fa6";

const features: {
  icon: ReactNode;
  label: string;
  title: string;
  desc: string;
  tone: "primary" | "paid" | "pending" | "draft";
}[] = [
  {
    icon: <FaBolt size={16} />,
    label: "01 / Create",
    title: "Send invoices in minutes",
    desc: "Add your client, drop in line items, hit send. No templates to wrestle with, no formatting quirks — just clean invoices on their way.",
    tone: "primary",
  },
  {
    icon: <FaChartLine size={14} />,
    label: "02 / Track",
    title: "Know who's paid",
    desc: "Every invoice carries a clear status — Paid, Pending, or Draft — so a single glance tells you what needs your attention today.",
    tone: "paid",
  },
  {
    icon: <FaFilter size={14} />,
    label: "03 / Filter",
    title: "Find what matters",
    desc: "Zero in on the pending invoices you need to chase, or pull up everything paid this month. Your view, your way, in one tap.",
    tone: "pending",
  },
  {
    icon: <FaPenToSquare size={14} />,
    label: "04 / Manage",
    title: "Refine without rework",
    desc: "Caught a typo or a missed line item? Reopen the invoice, tweak it, save it. Mark it paid when the money lands. Delete with a safety check.",
    tone: "draft",
  },
];

const paymentTermOptions: { value: string; label: string }[] = [
  { value: "1", label: "Net 1 Day" },
  { value: "7", label: "Net 7 Days" },
  { value: "14", label: "Net 14 Days" },
  { value: "30", label: "Net 30 Days" },
];

export { features, paymentTermOptions };
