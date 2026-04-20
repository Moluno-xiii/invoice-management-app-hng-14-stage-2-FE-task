import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  return (
    <aside className="bg-sidebar sticky top-0 z-20 flex w-full shrink-0 flex-row items-center justify-between overflow-hidden rounded-b-[20px] lg:h-dvh lg:w-25.75 lg:flex-col lg:rounded-r-[20px] lg:rounded-b-none">
      <Link
        to="/"
        aria-label="Link to homepage"
        className="relative flex size-18 shrink-0 items-center justify-center lg:size-25.75"
      >
        <img
          src="/sidebar-image.svg"
          className="size-full object-cover"
          alt=""
          aria-hidden="true"
        />
      </Link>

      <div className="flex flex-row items-center gap-x-5 pr-5 lg:w-full lg:flex-col lg:gap-x-0 lg:gap-y-6 lg:pr-0 lg:pb-6">
        <ThemeToggle />
        <div
          aria-hidden="true"
          className="h-7.5 w-px bg-[#494E6E] lg:h-px lg:w-full"
        />
        <img
          src="/user-avatar.svg"
          className="size-8 shrink-0 rounded-full lg:size-10"
          alt="User avatar"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
