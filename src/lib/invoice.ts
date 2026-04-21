import type { Invoice, InvoiceItem } from "@/types";

const itemTotal = (item: InvoiceItem) => item.quantity * item.price;

const getInvoiceTotal = (invoice: Invoice) =>
  invoice.items.reduce((sum, item) => sum + itemTotal(item), 0);

const formatAmount = (value: number) =>
  `£ ${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const formatDate = (iso: string) => {
  const date = new Date(iso);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getTodaysDate = () => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

export { itemTotal, getInvoiceTotal, formatAmount, formatDate, getTodaysDate };
