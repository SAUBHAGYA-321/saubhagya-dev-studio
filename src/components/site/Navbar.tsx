import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "./theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/collaborate", label: "Collaborate" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "glass" : "border border-transparent"
        }`}
      >
        <Link to="/" className="font-display text-sm font-bold tracking-tight sm:text-base">
          Saubhagya<span className="text-gradient"> Singh</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "text-primary" }}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            className="glass glass-hover hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold sm:inline-flex"
          >
            <Download className="size-3.5" /> Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="glass flex size-10 items-center justify-center rounded-full md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul className="glass animate-rise mx-auto mt-2 flex max-w-6xl flex-col p-2 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="block rounded-xl px-4 py-3 text-sm text-muted-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
