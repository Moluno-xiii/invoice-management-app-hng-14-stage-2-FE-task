import type { InvoicePaymentStatus } from "@/types";
import { useEffect, useRef, useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";

const options: { value: InvoicePaymentStatus; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
];

interface Props {
  value: Set<InvoicePaymentStatus>;
  setValue: (next: Set<InvoicePaymentStatus>) => void;
}

const FilterDropdown: React.FC<Props> = ({ value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const toggle = (status: InvoicePaymentStatus) => {
    const next = new Set(value);
    if (next.has(status)) {
      next.delete(status);
    } else {
      next.add(status);
    }
    setValue(next);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="text-text text-nm flex flex-row items-center gap-x-3 font-bold tracking-[-0.25px] transition-opacity hover:opacity-80"
      >
        <span>
          <span className="sm:hidden">Filter</span>
          <span className="hidden sm:inline">Filter by status</span>
        </span>
        <FaChevronDown
          size={12}
          className={`text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="bg-tile shadow-primary-soft/20 absolute top-[calc(100%+24px)] left-1/2 z-20 flex w-48 -translate-x-1/2 flex-col gap-y-4 rounded-lg p-6 shadow-md"
        >
          {options.map((option) => {
            const checked = value.has(option.value);
            return (
              <label
                key={option.value}
                className="flex cursor-pointer flex-row items-center gap-x-3 select-none"
              >
                <span
                  aria-hidden="true"
                  className={`flex size-4 items-center justify-center rounded-sm border transition-colors ${checked ? "bg-primary border-primary" : "bg-input-border/40 border-input-border"}`}
                >
                  {checked && <FaCheck size={9} className="text-white" />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggle(option.value)}
                />
                <span className="text-text text-nm font-bold tracking-[-0.25px]">
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
