import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Plus } from "lucide-react";
import projectImg from "@/assets/project-travelboost.jpg";
import { GlassCard, SectionHeading } from "@/components/site/GlassCard";
import { CONTACT } from "@/lib/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({
  meta: [
    { title: "Projects — Travel Boost and more | Saubhagya Singh" },
    {
      name: "description",
      content:
        "Travel Boost is a [yaha 1 line mein bata do project kya karta hai], built by Saubhagya Singh.",
    },
    { property: "og:title", content: "Projects — Saubhagya Singh" },
    {
      property: "og:description",
      content: "A look at Travel Boost and upcoming full stack builds.",
    },
  ],
}),
  component: Projects,
});

function Projects() {
  return (
    <div className="px-4 py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects I'm building"
        subtitle="Currently one flagship project, with room to grow."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        <GlassCard className="overflow-hidden p-0">
          <img
            src={projectImg}
            alt="Screenshot of the Travel Boost project"
            loading="lazy"
            width={1200}
            height={800}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-lg font-semibold">Travel Boost</h2>
              <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-primary">
                In Development
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Travel Boost helps users plan and organize trips smartly, with smart
              suggestions and an easy travel planning experience.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://github.com/SAUBHAGYA-321/travel-boost"
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
              >
                <Github className="size-3.5" /> GitHub
              </a>
              <a
                
                 href="https://travel-boost-wine.vercel.app/ "
  target="_blank"
  rel="noreferrer"
  className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
              >
                <ExternalLink className="size-3.5" /> Live Demo
              </a>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center border-dashed text-center">
          <span className="glass flex size-12 items-center justify-center rounded-full text-primary">
            <Plus className="size-5" />
          </span>
          <h2 className="mt-4 font-display text-base font-semibold">Next project</h2>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Space reserved for upcoming full stack builds — new work lands here as it
            ships.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
