import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const drift = Math.min(scrollY * 0.12, 80);

  return (
    <section className="relative min-h-screen w-full bg-background text-foreground overflow-hidden flex flex-col">
      {/* Blueprint grid + top glow */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, hsl(var(--primary) / 0.16), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-40 pb-8">
        <div style={{ transform: `translate3d(0, -${drift}px, 0)` }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-5 mb-6 animate-fade-up">
            <span className="block h-px w-12 bg-primary" />
            <span className="font-body text-[11px] md:text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Graphic Designer · Portfolio 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display uppercase leading-[0.85] tracking-[0.02em] text-[18vw] md:text-[14vw] lg:text-[12rem]">
            <span className="text-foreground">Port</span>
            <span className="text-primary glow-primary">folio</span>
          </h1>

          {/* Lower row */}
          <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
            <p className="md:col-span-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              A curated selection of brand identity, packaging, and editorial
              design work — built for agencies and clients who care about the
              details.
            </p>

            <div className="md:col-span-6 flex gap-12 md:justify-end">
              {[
                { n: "03+", l: "Years" },
                { n: "80+", l: "Projects" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl md:text-5xl text-primary leading-none">
                    {s.n}
                  </div>
                  <div className="mt-2 font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-4 font-body text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© Muhammed Jabir A K</span>
          <span className="hidden md:inline">Scroll to explore ↓</span>
          <span>Kerala, India</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
