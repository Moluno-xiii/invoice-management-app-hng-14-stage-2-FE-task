import { Link } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa6";
import InvoiceStack from "./InvoiceStack";
import PillLabel from "./shared/PillLabel";

const HeroSection = () => (
  <section className="relative px-6 pt-16 pb-24 md:px-10 md:pt-28 md:pb-36">
    <div className="mx-auto max-w-[1240px]">
      <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[1.05fr_1fr]">
        <div
          className="relative z-10 max-w-2xl"
          style={{ animation: "fade-up 0.8s ease backwards" }}
        >
          <PillLabel dotColor="bg-primary">
            Invoicing, refined for freelancers &amp; studios
          </PillLabel>

          <h1 className="text-text mt-8 text-5xl leading-[0.92] font-bold tracking-[-2.5px] md:text-7xl lg:text-[96px] lg:tracking-[-4px]">
            Invoices,
            <br />
            <span className="text-primary italic">beautifully</span>
            <br />
            handled.
          </h1>

          <p
            className="text-text-accent mt-8 max-w-xl text-[17px] leading-[1.6] font-medium tracking-[-0.2px]"
            style={{ animation: "fade-up 0.8s ease 0.15s backwards" }}
          >
            Send polished invoices in minutes. Know at a glance what&apos;s been
            paid, what&apos;s pending, and who you need to nudge — all from one
            dashboard designed around how you actually work.
          </p>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animation: "fade-up 0.8s ease 0.3s backwards" }}
          >
            <Link
              to="/invoices"
              className="bg-primary hover:bg-primary-soft group text-nm flex h-14 items-center justify-center gap-3 rounded-full px-8 font-bold tracking-[-0.2px] whitespace-nowrap text-white transition-colors"
            >
              Open dashboard
              <FaArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="#features"
              className="bg-inverse-btn-bg hover:bg-inverse-btn-hover text-inverse-btn-text text-nm flex h-14 items-center justify-center rounded-full px-8 font-bold tracking-[-0.2px] whitespace-nowrap transition-colors"
            >
              How it works
            </a>
          </div>
        </div>

        <InvoiceStack />
      </div>
    </div>
  </section>
);

export default HeroSection;
