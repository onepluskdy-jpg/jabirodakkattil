import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const experiences = [
  { title: "Graphic Designer", company: "PRIX Creative Hub", location: "Kondotty, Kerala", period: "2024 — Present", note: "Brand identities, campaigns and social content for agency clients." },
  { title: "Graphic Designer", company: "ADON Signcare", location: "Kozhikode, Kerala", period: "2023 — 2024", note: "Signage, large-format print files and die setup for production." },
  { title: "Graphic Designer", company: "FEZINN Hotels", location: "Kozhikode, Kerala", period: "2023", note: "In-house hospitality creatives, menus and promotional design." },
];

const education = [
  { title: "Diploma — Visualizing & Corporate Advertising", institution: "Evoka School of Advertising", period: "2022 — 2023" },
  { title: "Plus Two Commerce", institution: "GVHSS Omanoor", period: "2020 — 2022" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader index="02" title="Work Experience" />

        <div className="mt-14 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
          <ul className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal as="li" key={exp.company} delay={i * 90}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-start">
                  <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                    <div className="font-body text-[11px] uppercase tracking-[0.3em] text-primary">
                      {exp.period}
                    </div>
                    <h3 className="mt-3 font-display uppercase text-2xl md:text-3xl text-foreground">
                      {exp.title}
                    </h3>
                    <div className="mt-2 font-body text-sm text-foreground/80">
                      {exp.company} · {exp.location}
                    </div>
                    <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
                      {exp.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mt-20 pt-12 border-t border-border">
          <Reveal>
            <span className="font-body text-[11px] uppercase tracking-[0.3em] text-muted-foreground block mb-8">
              Education
            </span>
          </Reveal>
          <ul className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <Reveal as="li" key={edu.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                  <div className="font-body text-[11px] uppercase tracking-[0.3em] text-primary">
                    {edu.period}
                  </div>
                  <h3 className="mt-3 font-display uppercase text-xl md:text-2xl text-foreground leading-tight">
                    {edu.title}
                  </h3>
                  <div className="mt-2 font-body text-sm text-muted-foreground">
                    {edu.institution}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
