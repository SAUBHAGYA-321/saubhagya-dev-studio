import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Plus } from "lucide-react";
import projectImg from "@/assets/project-100ai.jpg";
import { GlassCard, SectionHeading } from "@/components/site/GlassCard";
import { CONTACT } from "@/lib/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — 100 AI and more | Saubhagya Singh" },
      {
        name: "description",
        content:
          "100 AI is an in-development AI project exploring multiple AI functionalities, built by Saubhagya Singh.",
      },
      { property: "og:title", content: "Projects — Saubhagya Singh" },
      {
        property: "og:description",
        content: "A look at 100 AI and upcoming full stack builds.",
      },
    ],
  }),
  component: Projects;
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
            alt="Abstract neural network artwork representing the 100 AI project"
            loading="lazy"
            width={1200}
            height={800}
            className="h-48 w-full object-cover"
          />
          <div className="p-6">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-lg font-semibold">100 AI</h2>
              <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-primary">
                In Development
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              An AI-based project exploring multiple AI functionalities inside a single,
              simple interface — from text tools to assistive automations.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
              >
                <Github className="size-3.5" /> GitHub
              </a>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-muted-foreground">
                <ExternalLink className="size-3.5" /> Demo coming soon
              </span>
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
