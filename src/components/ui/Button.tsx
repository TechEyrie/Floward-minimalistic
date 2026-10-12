import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "canvas" | "outline-light";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-canvas hover:bg-teal/90 border border-transparent",
  ghost:
    "bg-transparent text-ink border border-line hover:border-ink/35",
  canvas:
    "bg-canvas text-ink border border-transparent hover:bg-canvas/92",
  "outline-light":
    "bg-transparent text-canvas border border-canvas/40 hover:border-canvas hover:bg-canvas/5",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`transition-luxury inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium tracking-[0.1em] disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
