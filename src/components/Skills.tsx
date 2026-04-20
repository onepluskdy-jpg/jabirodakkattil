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
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Capabilities
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-16">
              What I do.
            </h2>

            {/* Skills list */}
            <ul className="divide-y divide-border border-y border-border">
              {skills.map((skill, i) => (
                <li
                  key={skill}
                  className="flex items-center justify-between py-6 group"
                >
                  <span className="font-display font-medium text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                  <span className="font-body text-sm text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tools */}
            <div className="mt-20">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6">
                Tools
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-display text-xl md:text-2xl text-foreground"
                  >
                    {tool}
                    <span className="text-muted-foreground ml-6">·</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
