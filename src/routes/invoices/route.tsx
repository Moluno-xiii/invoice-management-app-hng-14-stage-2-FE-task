import Sidebar from "@/components/shared/Sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/invoices")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-surface flex min-h-dvh w-full flex-col lg:flex-row">
      <Sidebar />
      <div className="mx-auto w-full max-w-182.5 flex-1 px-6 pt-8 pb-20 md:pt-16 md:pb-10 lg:px-0">
        <Outlet />
      </div>
    </div>
  );
}
