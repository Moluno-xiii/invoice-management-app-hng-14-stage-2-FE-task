import { features } from "@/data";
import PillLabel from "./shared/PillLabel";

const toneToAccent: Record<(typeof features)[number]["tone"], string> = {
  primary: "text-primary bg-primary/10",
  paid: "text-status-paid bg-status-paid-bg",
  pending: "text-status-pending bg-status-pending-bg",
  draft: "text-status-draft-fg bg-status-draft-bg",
};

const FeaturesSection = () => (
  <section
    id="features"
    className="relative px-6 py-24 md:px-10 md:py-32 lg:py-40"
  >
    <div className="mx-auto max-w-310">
      <div className="mb-16 flex flex-col gap-y-6 md:mb-20 md:flex-row md:items-end md:justify-between md:gap-y-0">
        <div className="max-w-xl">
          <PillLabel dotColor="bg-status-paid">Everything you need</PillLabel>
          <h2 className="text-text mt-6 text-4xl font-bold tracking-[-1.5px] md:text-6xl md:tracking-[-2.5px]">
            Less busywork.
            <br />
            More <span className="italic">paid</span> invoices.
          </h2>
        </div>
        <p className="text-text-accent text-nm max-w-sm leading-[1.6] font-medium tracking-[-0.2px]">
          Everything you&apos;d expect from a modern invoicing tool — put
          together for people who&apos;d rather be working than wrangling
          billing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article
            key={f.label}
            className="bg-tile border-input-border/60 hover:border-primary/40 flex flex-col gap-y-5 rounded-2xl border p-7 transition-colors"
          >
            <span
              className={`flex size-11 items-center justify-center rounded-xl ${toneToAccent[f.tone]}`}
            >
              {f.icon}
            </span>
            <div>
              <p className="text-text-accent mb-2 text-[11px] font-bold tracking-[2px] uppercase">
                {f.label}
              </p>
              <h3 className="text-text text-xl font-bold tracking-[-0.4px]">
                {f.title}
              </h3>
            </div>
            <p className="text-text-accent text-sml mt-auto leading-[1.55] font-medium tracking-[-0.15px]">
              {f.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
