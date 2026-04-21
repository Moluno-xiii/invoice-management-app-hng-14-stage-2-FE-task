interface Props {
  variant?: "no-invoices" | "filter-empty";
  onClearFilter?: () => void;
}

const InvoiceEmptyState: React.FC<Props> = ({
  variant = "no-invoices",
  onClearFilter,
}) => {
  const isFilter = variant === "filter-empty";

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-16 pt-10">
      <img
        src="/email-campaign.svg"
        className="h-48 w-60"
        alt=""
        aria-hidden="true"
      />
      <div className="flex flex-col items-center gap-y-6 text-center">
        <p className="text-text text-2xl font-bold tracking-[-0.75px]">
          {isFilter ? "Nothing matches that filter" : "There is nothing here"}
        </p>
        {isFilter ? (
          <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
            Try adjusting your filters to see more invoices.
          </p>
        ) : (
          <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
            Create an invoice by clicking the <br />
            <span className="font-bold">New Invoice</span> button and get
            started
          </p>
        )}
        {isFilter && onClearFilter && (
          <button
            type="button"
            onClick={onClearFilter}
            className="text-primary hover:text-primary-soft text-sml font-bold tracking-[-0.1px] underline underline-offset-4 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
};

export default InvoiceEmptyState;
