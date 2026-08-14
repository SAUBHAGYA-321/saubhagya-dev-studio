export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-float-slow absolute -left-32 top-10 size-[26rem] rounded-full bg-neon/25 blur-[120px]" />
      <div
        className="animate-float-slow absolute -right-24 top-1/3 size-[30rem] rounded-full bg-neon-violet/25 blur-[130px]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="animate-float-slow absolute bottom-0 left-1/3 size-[22rem] rounded-full bg-primary/20 blur-[120px]"
        style={{ animationDelay: "-9s" }}
      />
    </div>
  );
}
