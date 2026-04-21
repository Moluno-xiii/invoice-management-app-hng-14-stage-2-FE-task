const SKELETON_COUNT = 6;

const InvoiceListLoadingState = () => {
  return (
    <ul
      aria-busy="true"
      aria-label="Loading invoices"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1"
    >
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <li
          key={index}
          style={{ animationDelay: `${index * 0.06}s` }}
          className="bg-tile animate-pulse rounded-lg border border-transparent px-6 py-6 md:h-18 md:px-8 md:py-0"
        >
          <div className="flex flex-col gap-y-6 md:hidden">
            <div className="flex flex-row items-center justify-between">
              <div className="bg-input-border h-4 w-20 rounded-sm" />
              <div className="bg-input-border h-3 w-24 rounded-sm" />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-y-2">
                <div className="bg-input-border h-3 w-24 rounded-sm" />
                <div className="bg-input-border h-4 w-20 rounded-sm" />
              </div>
              <div className="bg-input-border h-10 w-26 rounded-md" />
            </div>
          </div>
          <div className="hidden h-full grid-cols-[96px_152px_1fr_auto_104px_20px] items-center gap-x-4 md:grid">
            <div className="bg-input-border h-4 w-16 rounded-sm" />
            <div className="bg-input-border h-3 w-28 rounded-sm" />
            <div className="bg-input-border h-3 w-32 rounded-sm" />
            <div className="bg-input-border h-4 w-20 justify-self-end rounded-sm" />
            <div className="bg-input-border h-10 w-26 rounded-md" />
            <div className="bg-input-border h-3 w-3 justify-self-end rounded-sm" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InvoiceListLoadingState;
