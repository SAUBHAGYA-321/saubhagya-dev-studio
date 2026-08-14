import { createFileRoute } from "@tanstack/react-router";
import { Atom, Braces, Brain, FileCode2, Palette, Server, Workflow } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/site/GlassCard";
import { SKILLS } from "@/lib/profile";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — React, Node.js, DSA | Saubhagya Singh" },
      {
        name: "description",
        content:
          "Frontend HTML, CSS, JavaScript and React, backend Node.js, plus Data Structures & Algorithms and AI basics.",
      },
      { property: "og:title", content: "Skills — Saubhagya Singh" },
      {
        property: "og:description",
        content: "Frontend, backend and CS foundations with current proficiency levels.",
      },
    ],
  }),
  component: Skills,
});

const icons: Record<string, typeof Atom> = {
  HTML: FileCode2,
  CSS: Palette,
  JavaScript: Braces,
  React: Atom,
  "Node.js": Server,
  "Data Structures & Algorithms (Learning)": Workflow,
  "AI Basics": Brain,
};

function Skills() {
  return (
    <div className="px-4 py-16">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        subtitle="Growing steadily — levels reflect honest current proficiency, not aspiration."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
        {SKILLS.map((group) => (
          <GlassCard key={group.group}>
            <h2 className="font-display text-lg font-semibold">{group.group}</h2>
            <ul className="mt-5 space-y-5">
              {group.items.map((item) => {
                const Icon = icons[item.name] ?? Braces;
                return (
                  <li key={item.name}>
                    <div className="flex items-center gap-3">
                      <Icon className="size-4 text-primary" />
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {item.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon to-neon-violet transition-[width] duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
