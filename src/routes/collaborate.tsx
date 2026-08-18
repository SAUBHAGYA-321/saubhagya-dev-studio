import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarClock, Github, GitPullRequest, Users } from "lucide-react";
import { toast } from "sonner";
import { GlassCard, SectionHeading } from "@/components/site/GlassCard";
import { CONTACT } from "@/lib/profile";
import { sendActivity } from "@/lib/contact.functions";

export const Route = createFileRoute("/collaborate")({
  head: () => ({
    meta: [
      { title: "Collaborate & Book a Meeting | Saubhagya Singh" },
      {
        name: "description",
        content:
          "Open to open-source collaboration and paid projects. Request a meeting slot with Saubhagya Singh directly from the portfolio.",
      },
      { property: "og:title", content: "Collaborate with Saubhagya Singh" },
      {
        property: "og:description",
        content: "GitHub collaboration, team projects and quick intro meetings.",
      },
    ],
  }),
  component: Collaborate,
});

const TIMES = [
  "09:00",
  "10:00",
  "11:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

function dayName(date: string) {
  if (!date) return "";
  const d = new Date(`${date}T00:00:00`);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString(undefined, { weekday: "long" });
}

function Collaborate() {
  const [sending, setSending] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIMES[2]!);

  const today = new Date().toISOString().slice(0, 10);
  const day = dayName(date);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      const res = await sendActivity({
        data: {
          kind: "meeting",
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          context: `Google Meet · ${day || "Day"} ${date || "date not set"} at ${time} (IST)`,
          message: String(fd.get("agenda") ?? ""),
        },
      });
      if (res.ok) {
        toast.success("Meeting request sent — I'll email the Google Meet link.");
        form.reset();
        setDate("");
      } else {
        toast.error("Couldn't send the request. Please email me directly.");
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
        eyebrow="Collaborate"
        title="Build something with me"
        subtitle="Open source, hackathons, student teams or client work — I'm in."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        <div className="space-y-5">
          <GlassCard>
            <span className="glass flex size-11 items-center justify-center rounded-full text-primary">
              <Github className="size-5" />
            </span>
            <h2 className="mt-4 font-display text-base font-semibold">GitHub</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow my repositories, open an issue, or invite me to contribute to yours.
            </p>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
            >
              <GitPullRequest className="size-3.5" /> Visit my GitHub
            </a>
          </GlassCard>

          <GlassCard>
            <span className="glass flex size-11 items-center justify-center rounded-full text-primary">
              <Users className="size-5" />
            </span>
            <h2 className="mt-4 font-display text-base font-semibold">
              What I&apos;m looking for
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>· Open-source issues in React / Node.js projects</li>
              <li>· Student teams building real products</li>
              <li>· Freelance full stack website work</li>
              <li>· AI experiments and study partners for DSA</li>
            </ul>
          </GlassCard>
        </div>

        <GlassCard hover={false}>
          <span className="glass flex size-11 items-center justify-center rounded-full text-primary">
            <CalendarClock className="size-5" />
          </span>
          <h2 className="mt-4 font-display text-base font-semibold">Book a meeting</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Pick a rough slot and tell me the agenda — I&apos;ll confirm over email.
          </p>
          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <select
              name="slot"
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            >
              <option>Weekday morning</option>
              <option>Weekday evening</option>
              <option>Weekend</option>
            </select>
            <textarea
              name="agenda"
              required
              rows={4}
              placeholder="What should we discuss?"
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={sending}
              className="glow-ring w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
            >
              {sending ? "Sending…" : "Request meeting"}
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
