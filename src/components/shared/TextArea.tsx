import { useId } from "react";
import FormField from "./FormField";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
}

const TextArea = ({
  label,
  error,
  id,
  wrapperClassName,
  className = "",
  rows = 4,
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
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        aria-invalid={error ? true : undefined}
        className={`bg-tile text-text placeholder:text-text-accent/60 font-spartan caret-primary focus:border-primary-soft text-nm resize-y rounded-sm border px-5 py-3.5 font-bold tracking-[-0.25px] transition-colors duration-200 outline-none ${error ? "border-error focus:border-error" : "border-input-border hover:border-primary"} ${className}`}
        {...rest}
      />
    </FormField>
  );
};

export default TextArea;
