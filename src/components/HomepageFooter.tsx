const HomepageFooter = () => (
  <footer className="px-6 pb-12 md:px-10">
    <div className="border-input-border/60 mx-auto flex max-w-310 flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center">
      <div className="flex items-center gap-3">
        <img
          src="/sidebar-image.svg"
          alt=""
          className="size-8 rounded-md object-cover"
        />
        <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
          Billing that stays out of your way.
        </p>
      </div>
      <p className="text-text-accent text-sml font-medium tracking-[-0.1px]">
        Built by <span className="text-text font-bold">&copy; Moluno</span>
      </p>
    </div>
  </footer>
);

export default HomepageFooter;
