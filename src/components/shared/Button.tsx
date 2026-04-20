import type { ReactNode } from "react";

type ButtonVariants = "default" | "error" | "inverse" | "dark";
type ButtonSize = "default" | "small" | "large";

interface Props {
  text: string;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const variantClasses: Record<ButtonVariants, string> = {
  default: "bg-primary hover:bg-primary-soft text-white",
  error: "bg-error hover:bg-error-soft text-white",
  inverse: "bg-inverse-btn-bg hover:bg-inverse-btn-hover text-inverse-btn-text",
  dark: "bg-dark-btn-bg hover:bg-dark-btn-hover text-dark-btn-text",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "min-w-32.75 px-2",
  small: "px-6",
  large: "min-w-87.5 justify-center",
};

const Button: React.FC<Props> = ({
  text,
  onClick,
  icon,
  variant = "default",
  size = "default",
  type = "button",
  disabled,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-12 cursor-pointer flex-row items-center gap-x-4 rounded-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && (
        <span className="flex size-8 items-center justify-center rounded-full bg-white text-black">
          {icon}
        </span>
      )}
      <p
        className={`font-spartan text-nm text-center font-bold tracking-[-0.25px] ${!icon ? "flex-1" : "mr-3.75"}`}
      >
        {text}
      </p>
    </button>
  );
};

export default Button;
