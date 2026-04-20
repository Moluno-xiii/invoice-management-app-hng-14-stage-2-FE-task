import { formatAmount, getInvoiceTotal } from "@/lib/invoice";
import type { Invoice } from "@/types";

const InvoiceDetailsTable: React.FC<{ invoice: Invoice }> = ({ invoice }) => {
  const total = getInvoiceTotal(invoice);
  return (
    <section className="bg-surface mt-10 overflow-hidden rounded-t-lg">
      <div className="p-6 md:p-8">
        <div className="hidden grid-cols-[1fr_80px_120px_120px] items-center pb-8 md:grid">
          {["Item Name", "QTY.", "Price", "Total"].map((h, i) => (
            <p
              key={h}
              className={`text-text-accent text-[11px] font-medium tracking-[-0.23px] ${i === 1 || i === 2 ? "text-center" : ""} ${i === 3 ? "text-right" : ""}`}
            >
              {h}
            </p>
          ))}
        </div>
        <ul className="flex flex-col gap-y-6 md:gap-y-8">
          {invoice.items.map((item) => (
            <li
              key={item.name}
              className="grid grid-cols-2 gap-y-2 md:grid-cols-[1fr_80px_120px_120px] md:items-center md:gap-y-0"
            >
              <p className="text-text text-nm col-start-1 row-start-1 font-bold tracking-[-0.25px]">
                {item.name}
              </p>
              <p className="text-text-accent text-nm col-start-1 row-start-2 font-bold tracking-[-0.25px] md:col-start-2 md:row-start-1 md:text-center">
                <span className="md:hidden">
                  {item.quantity} × {formatAmount(item.price)}
                </span>
                <span className="hidden md:inline">{item.quantity}</span>
              </p>
              <p className="text-text-accent text-nm hidden font-bold tracking-[-0.25px] md:col-start-3 md:row-start-1 md:inline md:text-center">
                {formatAmount(item.price)}
              </p>
              <p className="text-text text-nm col-start-2 row-span-2 row-start-1 self-center justify-self-end font-bold tracking-[-0.25px] md:col-start-4 md:row-span-1 md:row-start-1 md:text-right">
                {formatAmount(item.quantity * item.price)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-total-strip flex flex-row items-center justify-between px-6 py-8 md:px-8">
        <p className="text-[11px] font-medium tracking-[-0.23px] text-white">
          <span className="md:hidden">Grand Total</span>
          <span className="hidden md:inline">Amount Due</span>
        </p>
        <p className="text-xl font-bold tracking-[-0.42px] text-white md:text-2xl md:tracking-[-0.5px]">
          {formatAmount(total)}
        </p>
      </div>
    </section>
  );
};

export default InvoiceDetailsTable;
