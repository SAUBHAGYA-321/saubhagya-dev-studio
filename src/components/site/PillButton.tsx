import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 label-caps transition-colors";
const solid = "bg-foreground text-background hover:bg-foreground/85";
const outline = "border border-foreground/30 text-foreground hover:border-foreground";

function Arrow({ variant }: { variant: "solid" | "outline" }) {
  return (
    <span
      className={cn(
        "flex size-8 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5",
        variant === "solid" ? "bg-background text-foreground" : "bg-foreground text-background",
      )}
    >
      <ArrowRight className="size-3.5" />
    </span>
  );
}

export function PillLink({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(base, variant === "solid" ? solid : outline, className)}
    >
      {children}
      <Arrow variant={variant} />
    </Link>
  );
}

export function PillAnchor({
  href,
  children,
  variant = "outline",
  className,
  external = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(base, variant === "solid" ? solid : outline, className)}
    >
      {children}
      <Arrow variant={variant} />
    </a>
  );
}

export function PillButton({
  children,
  variant = "solid",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" }) {
  return (
    <button
      className={cn(
        base,
        variant === "solid" ? solid : outline,
        "disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
      <Arrow variant={variant} />
    </button>
  );
}
