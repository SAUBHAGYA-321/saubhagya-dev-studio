import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "border border-rule bg-card p-6 transition-colors",
        hover && "hover:border-foreground/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl animate-rise",
        align === "center" && "text-center",
      )}
    >
      {eyebrow ? (
        <p className="label-caps text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
        {title}
        {accent ? <span className="serif-accent"> {accent}</span> : null}
      </h1>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <div className="mt-8 h-px w-full bg-rule" />
    </div>
  );
}
