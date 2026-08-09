import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const skills = [
  "Branding & Visual Identity",
  "Logo Design",
  "Social Media Creatives",
  "Package Design",
  "Flyer & Brochure Design",
  "Print File & Die Setup",
  "Advertisement Design",
  "Machine Operations",
];

const tools = [
  "Photoshop",
  "Illustrator",
  "CorelDRAW",
  "InDesign",
  "Figma",
  "After Effects",
  "Premiere Pro",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader index="03" title="Core Skills" />

        <div className="mt-14 grid md:grid-cols-2 gap-x-16">
          {skills.map((skill, i) => (
            <Reveal key={skill} delay={i * 50}>
              <div className="flex items-center justify-between gap-6 py-6 border-b border-border group">
                <span className="font-display uppercase text-xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                  {skill}
                </span>
                <span className="font-body text-xs text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tools */}
        <div className="mt-20">
          <Reveal>
            <span className="font-body text-[11px] uppercase tracking-[0.3em] text-muted-foreground block mb-8">
              Software
            </span>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {tools.map((tool, i) => (
              <Reveal key={tool} delay={i * 60}>
                <div className="rounded-xl border border-border bg-card px-4 py-6 text-center hover:border-primary/60 transition-colors">
                  <span className="font-display uppercase text-base md:text-lg text-foreground">
                    {tool}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
