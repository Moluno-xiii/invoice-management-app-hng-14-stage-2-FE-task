const stats: { value: string; label: string }[] = [
  { value: "< 2m", label: "From first click to invoice sent" },
  { value: "1 tap", label: "To mark paid, edit, or archive" },
  { value: "Any", label: "Device, screen size, or time of day" },
  { value: "∞", label: "Invoices, line items, clients" },
];

const NumbersSection = () => (
  <section id="numbers" className="relative px-6 pb-24 md:px-10 md:pb-32">
    <div className="border-input-border/60 mx-auto max-w-310 border-t pt-16 md:pt-24">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-y-3">
            <p className="text-text text-5xl font-bold tracking-[-2px] md:text-7xl md:tracking-[-3px]">
              {s.value}
            </p>
            <p className="text-text-accent text-sml max-w-[12ch] leading-[1.4] font-medium tracking-[-0.1px]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NumbersSection;
