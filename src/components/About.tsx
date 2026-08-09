import { Mail, Phone, MapPin, BadgeCheck, Instagram } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import profileImage from "@/assets/profile.png";

const info = [
  { icon: Mail, label: "Email", value: "muhammedjabirmkm@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 70124 18488" },
  { icon: MapPin, label: "Based", value: "Kerala, IN" },
  { icon: BadgeCheck, label: "Available", value: "Q1 · 2026" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader index="01" title="About Me" />

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
              <img
                src={profileImage}
                alt="Portrait of Muhammed Jabir A K, graphic designer based in Kerala"
                width={1280}
                height={1600}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/5] grayscale"
              />
              <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full border border-border bg-background/85 backdrop-blur px-4 py-2 font-body text-[10px] uppercase tracking-[0.25em] text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Available for work
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-display uppercase text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.02] text-foreground">
                Designer building{" "}
                <span className="text-primary glow-primary">bold brands</span>{" "}
                for a modern world.
              </h3>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-8 font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I'm Muhammed Jabir A K — a multidisciplinary graphic designer
                based in Kerala, crafting bold identities, packaging, print and
                campaign work for studios and brands. My background in
                production and print means I know exactly how a design behaves
                once it leaves the screen.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {info.map((item, i) => (
                <Reveal key={item.label} delay={120 + i * 70}>
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 shrink-0 rounded-full border border-border grid place-items-center text-primary">
                      <item.icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-body text-sm text-foreground truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://instagram.com/jabir.mkm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-body text-xs text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" /> @jabir.mkm
                </a>
                <a
                  href="https://behance.net/jabirmuhamme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-body text-xs text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Behance
                </a>
              </div>
            </Reveal>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border">
              {[
                { n: "03+", l: "Years" },
                { n: "80+", l: "Projects" },
                { n: "30+", l: "Clients" },
                { n: "07+", l: "Tools" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={i * 90}>
                  <div className="font-display text-4xl md:text-5xl text-foreground leading-none">
                    {s.n}
                  </div>
                  <div className="mt-2 font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.l}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
