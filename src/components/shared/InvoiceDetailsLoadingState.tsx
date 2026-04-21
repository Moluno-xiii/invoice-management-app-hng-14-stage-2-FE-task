const InvoiceDetailsLoadingState = () => {
  return (
    <div
      aria-busy="true"
      aria-label="Loading invoice"
      className="flex flex-col gap-y-4 md:gap-y-6"
    >
      <div className="bg-input-border h-6 w-24 animate-pulse rounded-sm" />
      <div className="bg-tile flex animate-pulse items-center justify-between rounded-lg px-6 py-6 md:px-8">
        <div className="flex items-center gap-x-5">
          <div className="bg-input-border h-4 w-14 rounded-sm" />
          <div className="bg-input-border h-10 w-26 rounded-md" />
        </div>
        <div className="hidden gap-x-2 md:flex">
          <div className="bg-input-border h-12 w-20 rounded-full" />
          <div className="bg-input-border h-12 w-24 rounded-full" />
          <div className="bg-input-border h-12 w-36 rounded-full" />
        </div>
      </div>
      <div className="bg-tile flex animate-pulse flex-col gap-y-8 rounded-lg px-6 py-6 md:p-12">
        <div className="flex flex-col gap-y-3">
          <div className="bg-input-border h-4 w-24 rounded-sm" />
          <div className="bg-input-border h-3 w-32 rounded-sm" />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-y-2">
            <div className="bg-input-border h-3 w-20 rounded-sm" />
            <div className="bg-input-border h-4 w-24 rounded-sm" />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="bg-input-border h-3 w-20 rounded-sm" />
            <div className="bg-input-border h-4 w-28 rounded-sm" />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="bg-input-border h-3 w-16 rounded-sm" />
            <div className="bg-input-border h-4 w-24 rounded-sm" />
          </div>
        </div>
        <div className="bg-input-border h-24 rounded-md" />
        <div className="bg-input-border h-14 rounded-md" />
      </div>
    </div>
  );
};

export default InvoiceDetailsLoadingState;
