import PillLabel from "@/components/shared/PillLabel";
import { Link } from "@tanstack/react-router";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

const HomepageViewDashboardCTA = () => (
  <section className="px-6 pb-24 md:px-10 md:pb-32">
    <div className="bg-sidebar relative mx-auto max-w-310 overflow-hidden rounded-4xl px-8 py-16 md:px-16 md:py-24 lg:px-24 lg:py-28">
      <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
        <div className="max-w-2xl">
          <PillLabel dotColor="bg-primary-soft" dark>
            Ready when you are
          </PillLabel>
          <h2 className="mt-8 text-4xl leading-[0.96] font-bold tracking-[-1.5px] text-white md:text-6xl md:tracking-[-2.5px] lg:text-7xl lg:tracking-[-3px]">
            Your next
            <br />
            invoice is
            <br />
            <span className="text-primary-soft italic">one click</span> away.
          </h2>
          <p className="mt-8 max-w-lg text-[17px] leading-[1.6] font-medium tracking-[-0.2px] text-[#DFE3FA]">
            Open the dashboard, draft your first invoice, and send it before
            your coffee goes cold. Your clients get something polished. You get
            paid.
          </p>
          <Link
            to="/invoices"
            className="hover:bg-primary-soft group text-nm mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 font-bold tracking-[-0.2px] whitespace-nowrap text-[#0c0e16] transition-colors hover:text-white"
          >
            Open the dashboard
            <FaArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <CTAVisual />
      </div>
    </div>
  </section>
);

export default HomepageViewDashboardCTA;

const CTAVisual = () => (
  <div className="hidden lg:flex lg:h-105 lg:items-center lg:justify-center">
    <div className="group relative cursor-pointer perspective-distant">
      <div className="relative transition-transform duration-500 ease-out group-hover:scale-105">
        <div className="border-input-border/20 absolute top-6 -right-10 h-90 w-70 rotate-[-8deg] rounded-2xl border bg-white/4 backdrop-blur-sm" />
        <div
          className="bg-tile relative w-85 rotate-[5deg] rounded-[20px] p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-text-accent text-[10px] font-bold tracking-[2px] uppercase">
                Invoice
              </p>
              <p className="text-text mt-1 text-[22px] font-bold tracking-[-0.5px]">
                <span className="text-text-accent">#</span>INV-0142
              </p>
            </div>
            <div className="bg-primary flex size-10 items-center justify-center rounded-xl">
              <FaCheck size={16} className="text-white" />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-text-accent text-[10px] font-bold tracking-[2px] uppercase">
              Total
            </p>
            <p className="text-text mt-1 text-4xl font-bold tracking-[-1.2px]">
              £ 4,850<span className="text-text-accent">.00</span>
            </p>
          </div>
          <div className="border-input-border/60 mt-8 space-y-3 border-t pt-6">
            <div className="flex items-center justify-between">
              <span className="text-text-accent text-sml font-medium tracking-[-0.1px]">
                Design System
              </span>
              <span className="text-text text-sml font-bold tracking-[-0.2px]">
                £ 3,200.00
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-accent text-sml font-medium tracking-[-0.1px]">
                Implementation
              </span>
              <span className="text-text text-sml font-bold tracking-[-0.2px]">
                £ 1,650.00
              </span>
            </div>
          </div>
        </div>
        <div
          className="absolute -top-4 -right-8 rotate-[-14deg]"
          style={{ animation: "fade-up 0.8s ease 0.5s backwards" }}
        >
          <div className="border-status-paid bg-status-paid-bg rounded-xl border-[3px] px-5 py-2">
            <span className="text-status-paid text-xl font-bold tracking-[3px]">
              PAID
            </span>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -left-10 -z-10 size-28 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(146,119,255,0.6) 1.2px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />
    </div>
  </div>
);
