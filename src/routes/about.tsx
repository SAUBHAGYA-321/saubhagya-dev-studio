import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, School } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/site/GlassCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Saubhagya Singh — B.Tech CSE Student & Developer" },
      {
        name: "description",
        content:
          "Saubhagya Singh is a full stack developer pursuing B.Tech CSE at Ram Swaroop Memorial University, focused on web technologies, AI and DSA.",
      },
      { property: "og:title", content: "About Saubhagya Singh" },
      {
        property: "og:description",
        content: "Education timeline, learning mindset and project-building focus.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  {
    icon: GraduationCap,
    period: "2024 – 2028",
    title: "B.Tech, Computer Science & Engineering",
    place: "Ram Swaroop Memorial University",
    body: "Core CS foundations alongside hands-on full stack project work and DSA practice.",
  },
  {
    icon: School,
    period: "Completed",
    title: "Intermediate",
    place: "Modern Academy",
    body: "Built the science and mathematics base that led into computer science.",
  },
];

function About() {
  return (
    <div className="px-4 py-16">
      <SectionHeading
        eyebrow="About me"
        title="Fresher with a strong learning mindset"
        subtitle="Project-building focused, curious about AI, and consistent with problem solving."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        <GlassCard>
          <h2 className="font-display text-lg font-semibold">Who I am</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            I&apos;m a Full Stack Developer with a strong interest in web technologies and
            artificial intelligence. I enjoy taking an idea from a blank editor to a
            deployed product — designing the interface, wiring the API and shipping it.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Currently I&apos;m pursuing a B.Tech in Computer Science at Ram Swaroop
            Memorial University, and I completed my Intermediate at Modern Academy. Every
            week I dedicate time to Data Structures &amp; Algorithms so my problem solving
            keeps improving alongside my building skills.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            I&apos;m a fresher, and I treat that as an advantage: fast learner, open to
            feedback, and always building something new — right now that&apos;s{" "}
            <strong className="text-foreground">100 AI</strong>.
          </p>
        </GlassCard>

        <ol className="space-y-5">
          {timeline.map(({ icon: Icon, period, title, place, body }) => (
            <li key={title}>
              <GlassCard>
                <div className="flex items-start gap-4">
                  <span className="glass flex size-11 shrink-0 items-center justify-center rounded-full text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {period}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{place}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              </GlassCard>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
