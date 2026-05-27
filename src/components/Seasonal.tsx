import { Calendar } from "lucide-react";
import Reveal from "./Reveal";
import eidAdha from "@/assets/seasonal/eid-adha.png";

interface SeasonalPost {
  occasion: string;
  date: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const posts: SeasonalPost[] = [
  {
    occasion: "Eid al-Adha",
    date: "2025",
    title: "Eidukum Mubarak",
    description:
      "A playful seasonal greeting blending traditional Arabic typography with a bold, contemporary character — designed for social.",
    image: eidAdha,
    alt: "Eid al-Adha greeting poster — Arabic calligraphy with a stylised sheep character on a red field",
  },
];

const Seasonal = () => {
  return (
    <section id="seasonal" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 text-primary" />
                Seasonal & Events
              </div>
              <h2 className="font-display font-extrabold uppercase tracking-tight leading-[0.95] text-4xl md:text-5xl lg:text-6xl max-w-3xl">
                Greetings, festivals <br />
                <span className="text-primary">& cultural moments.</span>
              </h2>
            </div>
            <p className="font-body text-base text-muted-foreground max-w-md">
              Seasonal creatives crafted for Eid, Onam, Ramadan and other
              cultural moments — designed to feel rooted, modern and shareable.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
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
      </div>
    </section>
  );
};

export default Seasonal;
