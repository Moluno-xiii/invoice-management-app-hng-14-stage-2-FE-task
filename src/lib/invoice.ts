import type { Invoice, InvoiceItem } from "@/types";
import { mockInvoices } from "./mock-invoices";

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

const getInvoiceById = (id: string) =>
  mockInvoices.find((invoice) => invoice.id === id);

export { itemTotal, getInvoiceTotal, formatAmount, formatDate, getInvoiceById };
