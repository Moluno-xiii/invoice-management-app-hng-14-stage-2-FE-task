import Button from "@/components/shared/Button";
import { mockInvoices } from "@/lib/mock-invoices";
import type { InvoiceFormValue, InvoicePaymentStatus } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import CreateInvoiceForm from "./-components/CreateInvoiceForm";
import FilterDropdown from "./-components/FilterDropdown";
import InvoiceDisplay from "./-components/InvoiceDisplay";
import InvoiceEmptyState from "./-components/InvoiceEmptyState";

const emptyInvoiceFormValue = (): InvoiceFormValue => ({
  senderAddress: { street: "", city: "", postCode: "", country: "" },
  clientName: "",
  clientEmail: "",
  clientAddress: { street: "", city: "", postCode: "", country: "" },
  createdAt: new Date().toISOString().slice(0, 10),
  paymentTerms: 30,
  description: "",
  items: [],
});

const InvoicesIndexScreen = () => {
  const [filter, setFilter] = useState<Set<InvoicePaymentStatus>>(new Set());
  const [isCreateNewInvoiceFormOpen, setIsCreateNewInvoiceFormOpen] =
    useState(false);
  const [newValue, setNewValue] = useState<InvoiceFormValue>(() =>
    emptyInvoiceFormValue(),
  );

  const openNew = () => {
    setNewValue(emptyInvoiceFormValue());
    setIsCreateNewInvoiceFormOpen(true);
  };

  const visibleInvoices = useMemo(() => {
    if (filter.size === 0) return mockInvoices;
    return mockInvoices.filter((invoice) => filter.has(invoice.status));
  }, [filter]);

  const subtitle =
    visibleInvoices.length === 0
      ? "No invoices"
      : `There ${visibleInvoices.length === 1 ? "is" : "are"} ${visibleInvoices.length} total ${filter.size > 0 ? "filtered " : ""}invoice${visibleInvoices.length === 1 ? "" : "s"}`;

  return (
    <div className="flex h-full flex-col">
      <header className="bg-surface z-10 mb-8 flex flex-row items-center justify-between py-3 md:mb-16 lg:sticky lg:top-0">
        <div className="flex flex-col gap-y-1">
          <p className="text-text text-2xl font-bold tracking-[-0.75px] md:text-4xl md:tracking-[-1px]">
            Invoices
          </p>
          <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-row items-center gap-x-4 md:gap-x-10">
          <FilterDropdown value={filter} setValue={setFilter} />
          <div className="md:hidden">
            <Button
              text="New"
              size="small"
              icon={<FaPlus size={10} color="#7C5DFA" />}
              onClick={openNew}
            />
          </div>
          <div className="hidden md:block">
            <Button
              text="New Invoice"
              icon={<FaPlus size={10} color="#7C5DFA" />}
              onClick={openNew}
            />
          </div>
        </div>
      </header>

      {visibleInvoices.length === 0 ? (
        <InvoiceEmptyState />
      ) : (
        <InvoiceDisplay invoices={visibleInvoices} />
      )}

      {isCreateNewInvoiceFormOpen && (
        <CreateInvoiceForm
          newValue={newValue}
          setNewValue={setNewValue}
          setIsCreateNewFormOpen={setIsCreateNewInvoiceFormOpen}
        />
      )}
    </div>
  );
};

export const Route = createFileRoute("/invoices/")({
  component: InvoicesIndexScreen,
});
