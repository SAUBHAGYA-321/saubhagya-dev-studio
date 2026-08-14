import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { CONTACT } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="mt-24 px-4 pb-10">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center gap-4 p-6 text-center">
        <p className="font-display text-lg font-semibold">
          Let&apos;s build something together
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email" },
            { href: `tel:${CONTACT.phone}`, icon: Phone, label: "Phone" },
            { href: CONTACT.github, icon: Github, label: "GitHub" },
            { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover flex size-11 items-center justify-center rounded-full text-muted-foreground hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Saubhagya Singh &middot; Full Stack Developer
        </p>
      </div>
    </footer>
  );
}
