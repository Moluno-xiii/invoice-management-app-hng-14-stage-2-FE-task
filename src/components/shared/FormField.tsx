import type { ReactNode } from "react";

interface Props {
  id: string;
  label?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

const FormField: React.FC<Props> = ({
  id,
  label,
  error,
  children,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-2.25 ${className}`}>
      {(label || error) && (
        <div className="flex flex-row items-center justify-between">
          {label && (
            <label
              htmlFor={id}
              className={`text-sml font-medium tracking-[-0.1px] ${error ? "text-error" : "text-text-accent"}`}
            >
              {label}
            </label>
          )}
          {error && (
            <span className="text-error text-[10px] font-medium tracking-[-0.208px]">
              {error}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default FormField;
