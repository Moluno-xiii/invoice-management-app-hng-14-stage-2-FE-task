import type { Invoice } from "@/types";
import InvoiceRow from "./InvoiceRow";

interface Props {
  invoices: Invoice[];
}

const InvoiceDisplay: React.FC<Props> = ({ invoices }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
      {invoices.map((invoice, index) => (
        <InvoiceRow key={invoice.id} invoice={invoice} index={index} />
      ))}
    </ul>
  );
};

export default InvoiceDisplay;
