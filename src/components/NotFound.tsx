import { useRouter } from "@tanstack/react-router";
import Button from "./shared/Button";

const NotFound: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    if (router.history.canGoBack()) {
      router.history.back();
    } else {
      router.navigate({ to: "/invoices", replace: true });
    }
  };

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-y-6 px-6 text-center">
      <div className="bg-error-soft/20 border-error-soft/40 flex size-20 items-center justify-center rounded-full border">
        <span
          aria-hidden="true"
          className="text-error text-3xl font-bold tracking-[-1px]"
        >
          ?
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <h3 className="text-text text-2xl font-bold tracking-[-0.75px]">
          We couldn't find that page
        </h3>
        <p className="text-text-accent text-sml max-w-80 font-medium tracking-[-0.1px]">
          The page you were looking for doesn't exist or may have moved.
        </p>
      </div>
      <Button text="Go back" onClick={goBack} variant="default" size="small" />
    </div>
  );
};

export default NotFound;
