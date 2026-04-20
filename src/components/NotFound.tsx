import { useNavigate } from "@tanstack/react-router";
import Button from "./shared/Button";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-y-3">
      <h3 className="text-text text-2xl">Page not found </h3>
      <Button
        text="Go back home"
        onClick={() => navigate({ to: "/", replace: true })}
        variant="error"
        size="large"
      />
    </div>
  );
};

export default NotFound;
