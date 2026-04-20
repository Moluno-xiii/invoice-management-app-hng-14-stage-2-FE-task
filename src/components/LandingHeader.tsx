import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa6";

const LandingHeader = () => (
  <header className="bg-surface/70 border-input-border sticky top-0 z-40 border-b backdrop-blur-xl">
    <div className="mx-auto flex max-w-310 items-center justify-between px-6 py-4 md:px-10 md:py-5">
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/sidebar-image.svg"
          alt=""
          className="size-10 shrink-0 rounded-lg object-cover"
        />
        <span className="text-text text-[17px] font-bold tracking-[-0.5px]">
          invoicr
        </span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <a
          href="#features"
          className="text-text-accent hover:text-text text-sml font-medium tracking-[-0.1px] transition-colors"
        >
          Features
        </a>
        <a
          href="#numbers"
          className="text-text-accent hover:text-text text-sml font-medium tracking-[-0.1px] transition-colors"
        >
          Why invoicr
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          to="/invoices"
          className="bg-primary hover:bg-primary-soft group text-sml flex h-10 items-center gap-2 rounded-full pr-4 pl-5 font-bold tracking-[-0.1px] whitespace-nowrap text-white transition-colors"
        >
          Open dashboard
          <FaArrowRight
            size={10}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  </header>
);

export default LandingHeader;
