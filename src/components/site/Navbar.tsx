import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/site/theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Work" },
  { to: "/collaborate", label: "Collaborate" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-foreground" />
          <span className="label-caps">Saubhagya</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                activeOptions={{ exact: link.to === "/" }}
                className="label-caps transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-foreground px-5 py-2.5 label-caps text-background transition-colors hover:bg-foreground/85 sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex size-10 items-center justify-center rounded-full border border-foreground/30 md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul className="border-t border-rule px-4 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.to} className="border-b border-rule last:border-b-0">
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block py-3 label-caps text-muted-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
