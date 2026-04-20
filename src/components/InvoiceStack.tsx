import MiniInvoiceComponent from "./MiniInvoice";

const InvoiceStack = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[520px] lg:aspect-auto lg:h-[520px]">
    <MiniInvoiceComponent
      className="absolute top-0 left-1/2 -translate-x-[58%] lg:right-0 lg:left-auto lg:translate-x-0"
      rotation={4}
      animDelay="0.1s"
      id="RT3080"
      client="Jensen Huang"
      description="Brand Guidelines"
      amount="£ 1,800.90"
      status="paid"
    />
    <MiniInvoiceComponent
      className="absolute top-[120px] left-1/2 -translate-x-[38%] lg:right-[60px] lg:left-auto lg:translate-x-0"
      rotation={-3}
      animDelay="0.25s"
      id="QK8820"
      client="Erling Haaland"
      description="Strategy Workshop"
      amount="£ 2,800.00"
      status="pending"
    />
    <MiniInvoiceComponent
      className="absolute top-[260px] left-1/2 -translate-x-[62%] lg:right-[20px] lg:left-auto lg:translate-x-0"
      rotation={2}
      animDelay="0.4s"
      id="FV2353"
      client="Anita Wainwright"
      description="Logo Design"
      amount="£ 3,102.04"
      status="draft"
    />
  </div>
);

export default InvoiceStack;
