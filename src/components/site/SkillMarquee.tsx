import { SKILLS } from "@/lib/profile";

const items = SKILLS.flatMap((group) => group.items.map((item) => item.name));

/** Continuously scrolling strip of skills. */
export function SkillMarquee() {
  const row = [...items, ...items];

  return (
    <section className="mx-auto max-w-6xl border-y border-rule py-6">
      <h2 className="sr-only">Skills</h2>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="animate-marquee flex w-max items-center gap-10 group-hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <li key={`${name}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
              <span className="label-caps text-muted-foreground">{name}</span>
              <span aria-hidden className="size-1.5 rounded-full bg-foreground/40" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
