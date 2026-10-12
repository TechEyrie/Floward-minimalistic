export function HeroScrollCue() {
  return (
    <div
      className="hero-scroll-cue pointer-events-none absolute bottom-5 start-1/2 z-[2] hidden -translate-x-1/2 text-center md:block"
      aria-hidden
    >
      <span className="block text-[10px] font-medium uppercase tracking-[0.35em] text-canvas/65">
        Scroll
      </span>
      <span className="mx-auto mt-2.5 block h-9 w-px origin-top bg-gradient-to-b from-canvas/50 to-transparent" />
    </div>
  );
}
