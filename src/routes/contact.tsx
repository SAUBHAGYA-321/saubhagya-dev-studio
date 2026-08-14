import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { GlassCard, SectionHeading } from "@/components/site/GlassCard";
import { CONTACT } from "@/lib/profile";
import { sendActivity } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Saubhagya Singh — Email, Phone, GitHub, LinkedIn" },
      {
        name: "description",
        content:
          "Get in touch with Saubhagya Singh by email, phone or social profiles, or send a message straight from the contact form.",
      },
      { property: "og:title", content: "Contact Saubhagya Singh" },
      {
        property: "og:description",
        content: "Email, phone, GitHub, LinkedIn and a direct message form.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { icon: Github, label: "GitHub", value: "@saubhagyasingh", href: CONTACT.github },
  { icon: Linkedin, label: "LinkedIn", value: "Saubhagya Singh", href: CONTACT.linkedin },
  { icon: MapPin, label: "Location", value: CONTACT.location, href: undefined },
];

function Contact() {
  const [sending, setSending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      const res = await sendActivity({
        data: {
          kind: "contact",
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      if (res.ok) {
        toast.success("Message sent — thanks for reaching out!");
        form.reset();
      } else {
        toast.error("Couldn't send right now. Please email me directly.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="px-4 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Projects, internships, collaborations or a quick question — all welcome."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <GlassCard hover={false}>
          <h2 className="font-display text-base font-semibold">Reach me directly</h2>
          <ul className="mt-5 space-y-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="glass flex size-10 items-center justify-center rounded-full text-primary">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard hover={false}>
          <h2 className="font-display text-base font-semibold">Send a message</h2>
          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Message"
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={sending}
              className="glow-ring w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
