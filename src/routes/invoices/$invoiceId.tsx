import Button from "@/components/shared/Button";
import StatusTag from "@/components/shared/StatusTag";
import { getInvoiceById } from "@/lib/invoice";
import type { Invoice, InvoiceFormValue } from "@/types";
import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import DeleteInvoiceModal from "./-components/DeleteInvoiceModal";
import EditInvoiceForm from "./-components/EditInvoiceForm";
import InvoiceDetails from "./-components/InvoiceDetails";

export const Route = createFileRoute("/invoices/$invoiceId")({
  loader: ({ params }) => {
    const invoice: Invoice | undefined = getInvoiceById(params.invoiceId);
    if (!invoice) throw notFound();
    return invoice;
  },
  component: ViewInvoiceScreen,
});

const toFormValue = (invoice: Invoice): InvoiceFormValue => ({
  senderAddress: invoice.senderAddress,
  clientName: invoice.clientName,
  clientEmail: invoice.clientEmail,
  clientAddress: invoice.clientAddress,
  createdAt: invoice.createdAt,
  paymentTerms: invoice.paymentTerms,
  description: invoice.description,
  items: invoice.items,
});

function ViewInvoiceScreen() {
  const invoice: Invoice = Route.useLoaderData();
  const navigate = useNavigate();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editValue, setEditValue] = useState<InvoiceFormValue>(() =>
    toFormValue(invoice),
  );

  const openEdit = () => {
    setEditValue(toFormValue(invoice));
    setIsEditOpen(true);
  };

  const actions = (
    <>
      <Button variant="inverse" size="small" text="Edit" onClick={openEdit} />
      <Button
        variant="error"
        size="small"
        text="Delete"
        onClick={() => setIsDeleteOpen(true)}
      />
      {invoice.status === "pending" && (
        <Button
          variant="default"
          size="small"
          text="Mark as Paid"
          disabled={invoice.status !== "pending"}
        />
      )}
    </>
  );

  return (
    <div className="pb-24 md:pb-0">
      <Link
        to="/invoices"
        className="text-text group text-nm inline-flex flex-row items-center gap-x-6 font-bold tracking-[-0.25px] transition-opacity hover:opacity-70"
      >
        <FaChevronLeft size={10} className="text-primary" />
        Go back
      </Link>

      <div className="bg-tile mt-8 flex flex-row items-center justify-between gap-x-4 rounded-lg px-6 py-6 md:px-8">
        <div className="flex flex-row items-center gap-x-5">
          <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
            Status
          </p>
          <StatusTag status={invoice.status} />
        </div>
        <div className="hidden flex-row items-center gap-x-2 md:flex">
          {actions}
        </div>
      </div>

      <InvoiceDetails invoice={invoice} />

      <div className="bg-tile fixed right-0 bottom-0 left-0 z-10 flex flex-row items-center justify-center gap-x-2 px-6 py-5 md:hidden">
        {actions}
      </div>

      <DeleteInvoiceModal
        invoiceId={invoice.id}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => {
          setIsDeleteOpen(false);
          navigate({ to: "/invoices" });
        }}
      />

      {isEditOpen && (
        <EditInvoiceForm
          invoiceId={invoice.id}
          editValue={editValue}
          setIsEditOpen={setIsEditOpen}
          setEditValue={setEditValue}
        />
      )}
    </div>
  );
}

export default ViewInvoiceScreen;
