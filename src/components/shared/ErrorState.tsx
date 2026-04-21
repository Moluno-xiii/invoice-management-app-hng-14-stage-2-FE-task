import Button from "./Button";

interface Props {
  title?: string;
  message?: string;
  onRetry?: () => void;
  retryLabel?: string;
}

const ErrorState: React.FC<Props> = ({
  title = "Something went wrong",
  message = "We couldn't load what you were looking for. Try again in a moment.",
  onRetry,
  retryLabel = "Try again",
}) => {
  return (
    <div
      role="alert"
      className="flex flex-1 flex-col items-center justify-center gap-y-8 pt-10 text-center"
    >
      <div className="bg-error-soft/20 border-error-soft/40 flex size-20 items-center justify-center rounded-full border">
        <span
          aria-hidden="true"
          className="text-error text-3xl font-bold tracking-[-1px]"
        >
          !
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <p className="text-text text-2xl font-bold tracking-[-0.75px]">
          {title}
        </p>
        <p className="text-text-accent text-sml max-w-80 font-medium tracking-[-0.1px]">
          {message}
        </p>
      </div>
      {onRetry && (
        <Button
          text={retryLabel}
          size="small"
          variant="default"
          onClick={onRetry}
        />
      )}
    </div>
  );
};

export default ErrorState;
