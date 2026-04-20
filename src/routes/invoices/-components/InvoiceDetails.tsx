import BigText from "@/components/shared/BigText";
import { formatDate } from "@/lib/invoice";
import type { Invoice } from "@/types";
import InvoiceDetailsTable from "./InvoiceDetailsTable";

interface Props {
  invoice: Invoice;
}

const InvoiceDetails: React.FC<Props> = ({ invoice }) => {
  return (
    <article className="bg-tile mt-4 rounded-lg p-6 md:p-12">
      <header className="flex flex-col gap-y-8 md:flex-row md:items-start md:justify-between md:gap-y-0">
        <div className="flex flex-col gap-y-2">
          <p className="text-text text-nm font-bold tracking-[-0.25px]">
            <span className="text-text-accent">#</span>
            {invoice.id}
          </p>
          <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
            {invoice.description}
          </p>
        </div>
        <AddressBlock
          address={invoice.senderAddress}
          className="md:text-right"
        />
      </header>

      <section className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 md:mt-10 md:grid-cols-3">
        <LabeledBlock label="Invoice Date">
          <BigText text={formatDate(invoice.createdAt)} />
        </LabeledBlock>
        <LabeledBlock label="Bill To" className="row-span-2">
          <BigText text={invoice.clientName} />
          <AddressBlock address={invoice.clientAddress} className="mt-2" />
        </LabeledBlock>
        <LabeledBlock label="Payment Due">
          <BigText text={formatDate(invoice.paymentDue)} />
        </LabeledBlock>
        <LabeledBlock label="Sent to" className="col-span-2 md:col-span-1">
          <BigText className="break-all" text={invoice.clientEmail || "—"} />
        </LabeledBlock>
      </section>

      <InvoiceDetailsTable invoice={invoice} />
    </article>
  );
};

export default InvoiceDetails;

const LabeledBlock: React.FC<
  React.PropsWithChildren<{ label: string; className?: string }>
> = ({ label, children, className = "" }) => (
  <div className={`flex flex-col gap-y-3 ${className}`}>
    <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
      {label}
    </p>
    {children}
  </div>
);

const AddressBlock: React.FC<{
  address: Invoice["senderAddress"];
  className?: string;
}> = ({ address, className = "" }) => (
  <div
    className={`text-text-accent flex flex-col text-[11px] leading-4.5 font-medium tracking-[-0.23px] ${className}`}
  >
    {address.street && <span>{address.street}</span>}
    {address.city && <span>{address.city}</span>}
    {address.postCode && <span>{address.postCode}</span>}
    {address.country && <span>{address.country}</span>}
  </div>
);
