import Button from "@/components/shared/Button";
import ErrorState from "@/components/shared/ErrorState";
import InvoiceDetailsLoadingState from "@/components/shared/InvoiceDetailsLoadingState";
import StatusTag from "@/components/shared/StatusTag";
import { useGetInvoiceById } from "@/hooks/tanstack/useGetInvoices";
import type { Invoice, InvoiceFormValue } from "@/types";
import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { useLayoutEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import DeleteInvoiceModal from "./-components/DeleteInvoiceModal";
import EditInvoiceForm from "./-components/EditInvoiceForm";
import InvoiceDetails from "./-components/InvoiceDetails";
import MarkAsPaidModal from "./-components/MarkAsPaidModal";

export const Route = createFileRoute("/invoices/$invoiceId")({
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

const BackLink = () => (
  <Link
    to="/invoices"
    className="text-text group text-nm inline-flex flex-row items-center gap-x-6 font-bold tracking-[-0.25px] transition-opacity hover:opacity-70"
  >
    <FaChevronLeft size={10} className="text-primary" />
    Go back
  </Link>
);

function ViewInvoiceScreen() {
  const { invoiceId } = Route.useParams();
  const router = useRouter();
  const { data: invoice, isLoading, isError } = useGetInvoiceById(invoiceId);

  if (isLoading) {
    return (
      <div className="pb-24 md:pb-0">
        <InvoiceDetailsLoadingState />
      </div>
    );
  }

  if (isError || !invoice) {
    const goBack = () => {
      if (router.history.canGoBack()) {
        router.history.back();
      } else {
        router.navigate({ to: "/invoices", replace: true });
      }
    };
    return (
      <div className="flex min-h-[60vh] flex-col">
        <div className="mb-8">
          <BackLink />
        </div>
        <ErrorState
          title="We couldn't find this invoice"
          message="It may have been deleted, or it never existed."
          retryLabel="Go back"
          onRetry={goBack}
        />
      </div>
    );
  }

  return <LoadedInvoice invoice={invoice} />;
}

interface LoadedProps {
  invoice: Invoice;
}

const LoadedInvoice: React.FC<LoadedProps> = ({ invoice }) => {
  const navigate = useNavigate();

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isMarkPaidOpen, setIsMarkPaidOpen] = useState(false);
  const [editValue, setEditValue] = useState<InvoiceFormValue>(() =>
    toFormValue(invoice),
  );

  useLayoutEffect(() => {
    const previous = document.title;
    document.title = `Invoice ${invoice.id} | ${invoice.clientName}`;
    return () => {
      document.title = previous;
    };
  }, [invoice.id, invoice.clientName]);

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
          onClick={() => setIsMarkPaidOpen(true)}
        />
      )}
    </>
  );

  return (
    <div className="pb-24 md:pb-0">
      <BackLink />

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

      <MarkAsPaidModal
        invoiceId={invoice.id}
        open={isMarkPaidOpen}
        onClose={() => setIsMarkPaidOpen(false)}
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
};
