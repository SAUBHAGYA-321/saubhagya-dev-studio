import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Code2, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { GlassCard } from "@/components/site/GlassCard";
import { SkillMarquee } from "@/components/site/SkillMarquee";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saubhagya Singh — Full Stack Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Saubhagya Singh, full stack developer and B.Tech CSE student building modern web apps with React and Node.js while exploring AI and DSA.",
      },
      { property: "og:title", content: "Saubhagya Singh — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Modern web applications, an AI project called 100 AI, and a daily DSA practice habit.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  {
    icon: BrainCircuit,
    title: "100 AI — in development",
    body: "An AI-based project exploring multiple AI functionalities in one interface.",
  },
  {
    icon: Code2,
    title: "Full stack builds",
    body: "React front ends paired with Node.js APIs, shipped end to end.",
  },
  {
    icon: Sparkles,
    title: "DSA every day",
    body: "Sharpening problem solving with structured data structures & algorithms practice.",
  },
];

function Home() {
  return (
    <div className="px-4">
      <section className="mx-auto grid max-w-6xl items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="animate-rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Available for work
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
            Saubhagya <span className="text-gradient animate-sheen">Singh</span>
          </h1>
          <p className="mt-4 font-display text-base text-primary sm:text-lg">
            Full Stack Developer | AI Enthusiast | B.Tech CSE Student
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground">
            I build modern web applications and explore AI while strengthening my
            problem-solving skills through DSA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="glow-ring inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="animate-rise glass glow-ring relative mx-auto w-full max-w-sm overflow-hidden p-3">
          <img
            src={profile}
            alt="Portrait of Saubhagya Singh, full stack developer"
            width={912}
            height={1104}
            className="w-full rounded-[calc(var(--radius)+4px)] object-cover"
          />
          <div className="glass mt-3 flex items-center justify-between rounded-2xl px-4 py-3 text-xs">
            <span className="text-muted-foreground">B.Tech CSE · 2024–2028</span>
            <span className="font-semibold text-primary">RSMU</span>
          </div>
        </div>
      </section>

      <SkillMarquee />

      <section className="mx-auto max-w-6xl pb-8 pt-10">

        <h2 className="sr-only">Highlights</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <GlassCard key={title}>
              <Icon className="size-6 text-primary" />
              <h3 className="mt-4 font-display text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
