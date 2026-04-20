import { useEffect } from "react";
import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  onClose: () => void;
  children: ReactNode;
  footer: ReactNode;
}

const InvoiceFormDialog: React.FC<Props> = ({
  title,
  onClose,
  children,
  footer,
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-y-0 right-0 left-0 z-40 flex lg:left-25.75"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
        style={{ animation: "fade-in 0.2s ease" }}
      />

      <section
        className="bg-surface relative z-10 flex h-dvh w-full flex-col md:w-[min(719px,calc(100vw-200px))] md:rounded-r-[20px] md:shadow-[10px_4px_6px_rgba(0,0,0,0.1)]"
        style={{ animation: "slide-in-left 0.3s ease" }}
      >
        <div className="flex flex-col overflow-y-auto px-6 pt-8 pb-8 md:px-14 md:pt-14 md:pb-0">
          <h2 className="text-text mb-6 text-xl font-bold tracking-[-0.42px] md:text-2xl md:tracking-[-0.5px]">
            {title}
          </h2>
          {children}
        </div>
        <footer className="bg-tile mt-auto flex flex-row items-center justify-end gap-x-2 px-6 py-5 md:rounded-r-[20px] md:px-14 md:py-8">
          {footer}
        </footer>
      </section>
    </div>
  );
};

export default InvoiceFormDialog;
