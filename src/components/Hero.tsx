import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import profileImage from "@/assets/profile.png";

const marqueeItems = [
  "Branding",
  "Visual Identity",
  "Social Media",
  "Print Design",
  "Packaging",
  "Political Campaigns",
  "Logo Design",
  "Open to Work",
];

const Hero = () => {
  const loop = [...marqueeItems, ...marqueeItems];
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

  // Subtle parallax — portrait drifts up slightly as user scrolls.
  const portraitTranslate = Math.min(scrollY * 0.18, 120);
  const portraitScale = 1 + Math.min(scrollY * 0.0003, 0.05);

  return (
    <section className="relative min-h-screen w-full bg-background text-foreground overflow-hidden flex flex-col">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(var(--primary) / 0.15), transparent 60%)",
        }}
      />

      {/* Profile image with parallax — bottom sits on the green marquee line */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 w-[85%] sm:w-[65%] md:w-[55%] lg:w-[48%] xl:w-[42%] flex items-end justify-end z-0"
        style={{
          bottom: "5.5rem",
          transform: `translate3d(0, -${portraitTranslate}px, 0) scale(${portraitScale})`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src={profileImage}
          alt="Jabir portrait"
          className="w-full h-auto object-contain object-bottom opacity-95 md:opacity-100"
        />
      </div>

      {/* Top intro line */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pt-32 md:pt-36">
        <div className="flex items-center gap-3 font-body text-sm text-muted-foreground animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="uppercase tracking-[0.25em]">
            Hello 👋, great to have you here
          </span>
        </div>
      </div>

      {/* Main */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex-1 flex items-center py-12">
        <div className="w-full max-w-2xl animate-fade-up">
          <h1 className="font-display font-extrabold uppercase tracking-tight leading-[0.95] text-[10vw] md:text-5xl lg:text-6xl xl:text-[4.5rem]">
            <span className="text-primary">I'M A GRAPHIC DESIGNER</span>
            <br />
            <span className="text-foreground">CRAFTING BOLD BRAND IDENTITIES</span>
          </h1>

          <p className="mt-8 max-w-xl font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm Jabir — based in Kerala. Started in production and print, found
            my way to design. Now I build clear, considered identities that
            turn attention into trust.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kerala, India</span>
            </div>
            <span className="hidden md:inline">·</span>
            <span>@jabir.mkm</span>
            <span className="hidden md:inline">·</span>
            <span>Muhammed Jabir A K</span>
          </div>
        </div>
      </div>

      {/* Diagonal neon marquee */}
      <div className="relative z-10 mt-auto">
        <div className="-rotate-2 origin-center w-[110%] -ml-[5%] bg-primary text-primary-foreground py-4 overflow-hidden border-y border-primary/40 shadow-[0_0_60px_-10px_hsl(var(--primary)/0.6)]">
          <div className="flex w-max animate-marquee">
            {loop.map((item, i) => (
              <span
                key={i}
                className="font-display font-semibold uppercase tracking-wide text-xl md:text-2xl px-8 flex items-center gap-8 shrink-0"
              >
                <span className="text-primary-foreground/70">+</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex flex-col items-center gap-2 py-6 font-body text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        <span className="block w-px h-6 bg-primary" />
        Scroll
      </div>
    </section>
  );
};

export default Hero;
