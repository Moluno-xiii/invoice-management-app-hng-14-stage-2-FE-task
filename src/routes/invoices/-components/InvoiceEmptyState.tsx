const InvoiceEmptyState = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-16 pt-10">
      <img
        src="/email-campaign.svg"
        className="h-48 w-60"
        alt="Empty state illustration"
      />
      <div className="flex flex-col items-center gap-y-6 text-center">
        <p className="text-text text-2xl font-bold tracking-[-0.75px]">
          There is nothing here
        </p>
        <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
          Create an invoice by clicking the <br />
          <span className="font-bold">New Invoice</span> button and get started
        </p>
      </div>
    </div>
  );
};

export default InvoiceEmptyState;
