import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, MonitorSmartphone, Plug, Rocket } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/site/GlassCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Full Stack Development Services | Saubhagya Singh" },
      {
        name: "description",
        content:
          "Responsive websites, React front ends, Node.js APIs and end-to-end web application development.",
      },
      { property: "og:title", content: "Services — Full Stack Development" },
      {
        property: "og:description",
        content: "From responsive UI to Node.js APIs, delivered end to end.",
      },
    ],
  }),
  component: Services,
});

const items = [
  {
    icon: MonitorSmartphone,
    title: "Responsive websites",
    body: "Modern, mobile-first sites that look sharp on every screen size.",
  },
  {
    icon: Layers,
    title: "React front ends",
    body: "Component-driven interfaces with clean state handling and smooth interactions.",
  },
  {
    icon: Plug,
    title: "Node.js APIs",
    body: "REST endpoints, data handling and integrations that power your product.",
  },
  {
    icon: Rocket,
    title: "End-to-end delivery",
    body: "One person from idea to deployment — design, build, test, ship.",
  },
];

function Services() {
  return (
    <div className="px-4 py-16">
      <SectionHeading
        eyebrow="Services"
        title="Full Stack Development"
        subtitle="One focused service, delivered properly."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, body }) => (
          <GlassCard key={title}>
            <span className="glass flex size-11 items-center justify-center rounded-full text-primary">
              <Icon className="size-5" />
            </span>
            <h2 className="mt-4 font-display text-base font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-6xl">
        <GlassCard className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground sm:flex-1">
            Have a project in mind? Tell me what you need and I&apos;ll reply with an
            approach and timeline.
          </p>
          <Link
            to="/contact"
            className="glow-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Start a project <ArrowRight className="size-4" />
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}
