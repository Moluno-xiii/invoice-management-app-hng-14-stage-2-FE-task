import StatusTag from "@/components/shared/StatusTag";
import { formatAmount, formatDate, getInvoiceTotal } from "@/lib/invoice";
import type { Invoice } from "@/types";
import { Link } from "@tanstack/react-router";
import { IoChevronForward } from "react-icons/io5";

interface Props {
  invoice: Invoice;
  index?: number;
}

const InvoiceRow: React.FC<Props> = ({ invoice, index = 0 }) => {
  const total = formatAmount(getInvoiceTotal(invoice));
  const due = formatDate(invoice.paymentDue);

  return (
    <li
      style={{
        animation: `fade-up 0.45s ease ${index * 0.04}s backwards`,
      }}
    >
      <Link
        to="/invoices/$invoiceId"
        params={{ invoiceId: invoice.id }}
        className="bg-tile hover:border-primary focus-visible:border-primary block rounded-lg border border-transparent px-6 py-6 transition-colors duration-200 outline-none md:h-18 md:px-8 md:py-0"
      >
        <div className="flex flex-col gap-y-6 md:hidden">
          <div className="flex flex-row items-center justify-between">
            <p className="text-text text-nm font-bold tracking-[-0.25px]">
              <span className="text-text-accent">#</span>
              {invoice.id}
            </p>
            <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
              {invoice.clientName}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-y-2">
              <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
                <span>Due </span>
                {due}
              </p>
              <p className="text-text text-nm font-bold tracking-[-0.8px]">
                {total}
              </p>
            </div>
            <StatusTag status={invoice.status} />
          </div>
        </div>
        <div className="hidden h-full grid-cols-[96px_152px_1fr_auto_104px_20px] items-center gap-x-4 md:grid">
          <p className="text-text text-nm font-bold tracking-[-0.25px]">
            <span className="text-text-accent">#</span>
            {invoice.id}
          </p>
          <p className="text-text-accent text-sml font-medium tracking-[-0.1px] whitespace-nowrap">
            <span>Due </span>
            {due}
          </p>
          <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
            {invoice.clientName}
          </p>
          <p className="text-text text-nm justify-self-end font-bold tracking-[-0.8px]">
            {total}
          </p>
          <StatusTag status={invoice.status} />
          <IoChevronForward
            size={10}
            className="text-primary justify-self-end"
          />
        </div>
      </Link>
    </li>
  );
};

export default InvoiceRow;
