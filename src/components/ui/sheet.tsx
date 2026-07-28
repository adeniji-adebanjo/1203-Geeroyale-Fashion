"use client";

import * as React from "react";
import { Slot } from "./slot";
import { X } from "../icons";
import { useLockBodyScroll } from "./use-lock-body-scroll";

interface SheetContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue>({
  open: false,
  onOpenChange: () => {},
});

export function Sheet({
  children,
  open: controlledOpen,
  onOpenChange,
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = onOpenChange || setUncontrolledOpen;

  return (
    <SheetContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({
  asChild,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { open, onOpenChange } = React.useContext(SheetContext);
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      aria-expanded={open}
      aria-haspopup="dialog"
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function SheetContent({
  children,
  side = "right",
  className = "",
}: {
  children: React.ReactNode;
  side?: "right" | "left";
  className?: string;
}) {
  const { open, onOpenChange } = React.useContext(SheetContext);
  const panelRef = React.useRef<HTMLDivElement>(null);

  useLockBodyScroll(open);

  /* Close on Escape, and move focus into the panel when it opens */
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex bg-black/70 backdrop-blur-xs animate-fade-in ${
        side === "right" ? "justify-end" : "justify-start"
      }`}
      onClick={() => onOpenChange(false)}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className={`
          relative flex h-full w-[min(20rem,88vw)] flex-col overflow-y-auto overscroll-contain
          bg-navy shadow-2xl outline-none animate-slide-in-right
          ${side === "right" ? "border-l" : "border-r"} border-white/10 text-white
          ${className}
        `}
      >
        <button
          onClick={() => onOpenChange(false)}
          aria-label="Close menu"
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-gold"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function SheetHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex flex-col space-y-2 text-left ${className}`}
      {...props}
    />
  );
}

export function SheetTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={`text-lg font-semibold text-white ${className}`}
      {...props}
    />
  );
}
