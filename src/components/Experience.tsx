import Reveal from "./Reveal";

const experiences = [
  { title: "Graphic Designer", company: "PRIX Creative Hub", location: "Kondotty, Kerala", period: "2024 — Present" },
  { title: "Graphic Designer", company: "ADON Signcare", location: "Kozhikode, Kerala", period: "2023 — 2024" },
  { title: "Graphic Designer", company: "FEZINN Hotels", location: "Kozhikode, Kerala", period: "2023" },
];

const education = [
  { title: "Diploma — Visualizing & Corporate Advertising", institution: "Evoka School of Advertising", period: "2022 — 2023" },
  { title: "Plus Two Commerce", institution: "GVHSS Omanoor", period: "2020 — 2022" },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <Reveal>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Background
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-16">
                Experience &amp; Education.
              </h2>
            </Reveal>

            {/* Experience */}
            <div className="mb-20">
              <Reveal>
                <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6">
                  Experience
                </span>
              </Reveal>
              <ul className="divide-y divide-border border-y border-border">
                {experiences.map((exp, i) => (
                  <Reveal as="li" key={exp.company} delay={i * 80}>
                    <div className="py-6 grid md:grid-cols-12 gap-4 items-baseline">
                      <span className="md:col-span-3 font-body text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                      <span className="md:col-span-5 font-display font-medium text-xl md:text-2xl text-foreground">
                        {exp.title}
                      </span>
                      <span className="md:col-span-4 font-body text-base text-muted-foreground">
                        {exp.company} · {exp.location}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <Reveal>
                <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6">
                  Education
                </span>
              </Reveal>
              <ul className="divide-y divide-border border-y border-border">
                {education.map((edu, i) => (
                  <Reveal as="li" key={edu.title} delay={i * 80}>
                    <div className="py-6 grid md:grid-cols-12 gap-4 items-baseline">
                      <span className="md:col-span-3 font-body text-sm text-muted-foreground">
                        {edu.period}
                      </span>
                      <span className="md:col-span-5 font-display font-medium text-xl md:text-2xl text-foreground">
                        {edu.title}
                      </span>
                      <span className="md:col-span-4 font-body text-base text-muted-foreground">
                        {edu.institution}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
