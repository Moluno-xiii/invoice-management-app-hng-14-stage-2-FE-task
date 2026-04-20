import { useEffect, useId, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import FormField from "./FormField";

interface SelectOption {
  value: string;
  label: string;
}

interface Props {
  id?: string;
  name?: string;
  label?: string;
  error?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  wrapperClassName?: string;
  className?: string;
}

const Select = ({
  id,
  name,
  label,
  error,
  options,
  value,
  onChange,
  placeholder = "Select…",
  disabled,
  wrapperClassName,
  className = "",
}: Props) => {
  const reactId = useId();
  const buttonId = id ?? name ?? reactId;
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

  const selected = options.find((option) => option.value === value);

  return (
    <FormField
      id={buttonId}
      label={label}
      error={error}
      className={wrapperClassName}
    >
      <div ref={containerRef} className="relative">
        <button
          id={buttonId}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-invalid={error ? true : undefined}
          onClick={() => setIsOpen((open) => !open)}
          className={`bg-tile text-text font-spartan focus:border-primary-soft text-nm flex h-12 w-full flex-row items-center justify-between rounded-sm border px-5 font-bold tracking-[-0.25px] transition-colors duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-60 ${error ? "border-error focus:border-error" : "border-input-border hover:border-primary"} ${className}`}
        >
          <span className={selected ? "" : "text-text-accent/60"}>
            {selected ? selected.label : placeholder}
          </span>
          <FaChevronDown
            size={12}
            className={`text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <ul
            role="listbox"
            className="bg-tile absolute top-[calc(100%+8px)] left-0 z-20 flex w-full flex-col divide-y divide-(--input-border) overflow-hidden rounded-lg"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <li key={option.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`font-spartan hover:text-primary text-nm w-full px-6 py-3.75 text-left font-bold tracking-[-0.25px] transition-colors duration-150 ${isSelected ? "text-primary" : "text-text"}`}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </FormField>
  );
};

export default Select;
