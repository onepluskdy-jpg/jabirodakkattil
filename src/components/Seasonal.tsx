import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import eidAdha from "@/assets/seasonal/eid-adha.png";
import onam2026 from "@/assets/seasonal/onam-2026.png";

interface SeasonalPost {
  occasion: string;
  date: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
  tags?: string[];
}

const posts: SeasonalPost[] = [
  {
    occasion: "Onam",
    date: "2026",
    title: "Onam 2026",
    description:
      "A vibrant Onam greeting celebrating the harvest festival of Kerala — featuring King Mahabali, traditional architecture, and warm festive colours.",
    image: onam2026.url,
    alt: "Onam 2026 greeting poster — stylised King Mahabali on a Kerala balcony with Malayalam typography and blue sky",
    featured: true,
    tags: ["Poster", "Social", "Malayalam Typography"],
  },
  {
    occasion: "Eid al-Adha",
    date: "2025",
    title: "Eid Mubarak",
    description:
      "A playful seasonal greeting blending traditional Arabic typography with a bold, contemporary character — designed for social.",
    image: eidAdha,
    alt: "Eid al-Adha greeting poster — Arabic calligraphy with a stylised sheep character on a red field",
    tags: ["Poster", "Social", "Arabic Typography"],
  },
];


const featured = posts.find((p) => p.featured) ?? posts[0];
const rest = posts.filter((p) => p !== featured);

const Seasonal = () => {
  return (
    <section id="seasonal" className="relative py-20 md:py-28 bg-background overflow-hidden border-t border-border">
      {/* Subtle radial accent */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsl(var(--primary) / 0.12), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeader index="05" title="Festival Greetings" />
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mt-14 mb-12">
            <h3 className="font-display uppercase leading-[0.95] text-3xl md:text-5xl max-w-2xl">
              Greetings, festivals <br />
              <span className="text-primary glow-primary">& cultural moments.</span>
            </h3>
            <p className="font-body text-base text-muted-foreground max-w-md">
              Seasonal creatives crafted for Eid, Onam, Ramadan and other
              cultural moments — designed to feel rooted, modern and shareable.
            </p>
          </div>
        </Reveal>


        {/* Featured greeting — hero style */}
        <Reveal>
          <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 rounded-3xl overflow-hidden border border-border/60 bg-muted/20 p-4 md:p-6 lg:p-8">
            <div className="lg:col-span-7 relative overflow-hidden rounded-2xl bg-muted">
              <img
                src={featured.image}
                alt={featured.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-[5/6] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center py-2 lg:py-8">
              <div className="flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.3em] text-primary mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{featured.occasion}</span>
                <span className="text-muted-foreground">· {featured.date}</span>
              </div>

              <h3 className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-5xl md:text-6xl lg:text-7xl mb-6">
                {featured.title.split(" ").length > 1 ? (
                  <>
                    <span className="text-primary">{featured.title.split(" ")[0]}</span>
                    <br />
                    <span className="text-foreground">{featured.title.split(" ").slice(1).join(" ")}</span>
                  </>
                ) : (
                  <span className="text-primary">{featured.title}</span>
                )}
              </h3>

              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2 font-body text-[11px] uppercase tracking-[0.25em]">
                {featured.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded-full border ${
                      i === (featured.tags?.length ?? 0) - 1
                        ? "border-primary/40 text-primary"
                        : "border-border/70 text-muted-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {rest.map((post, i) => (
              <Reveal key={i} delay={i * 80}>
                <article className="group relative overflow-hidden rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/40 transition-colors">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                      <span className="text-primary">{post.occasion}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-1">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Seasonal;
