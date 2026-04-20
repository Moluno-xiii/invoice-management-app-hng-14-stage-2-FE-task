import { useId } from "react";
import FormField from "./FormField";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const Input = ({
  label,
  error,
  id,
  wrapperClassName,
  className = "",
  ref,
  ...rest
}: Props) => {
  const reactId = useId();
  const inputId = id ?? rest.name ?? reactId;

  return (
    <FormField
      id={inputId}
      label={label}
      error={error}
      className={wrapperClassName}
    >
      <input
        ref={ref}
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={`bg-tile text-text placeholder:text-text-accent/60 font-spartan caret-primary focus:border-primary-soft text-nm h-12 rounded-[4px] border px-5 font-bold tracking-[-0.25px] transition-colors duration-200 outline-none ${error ? "border-error focus:border-error" : "border-input-border hover:border-primary"} ${className}`}
        {...rest}
      />
    </FormField>
  );
};

export default Input;
