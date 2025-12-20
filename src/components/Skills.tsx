import { Palette, PenTool, Share2, Package, FileText, Printer, Settings, Layers } from "lucide-react";
const skills = [{
  icon: Palette,
  name: "Branding & Visual Identity",
  description: "Creating cohesive brand experiences"
}, {
  icon: PenTool,
  name: "Logo Design",
  description: "Memorable marks that stand out"
}, {
  icon: Share2,
  name: "Social Media Creatives",
  description: "Engaging content for digital platforms"
}, {
  icon: Package,
  name: "Package Design",
  description: "Eye-catching product packaging"
}, {
  icon: FileText,
  name: "Flyer & Brochure Design",
  description: "Print materials that convert"
}, {
  icon: Printer,
  name: "Print File & Die Setup",
  description: "Production-ready file preparation"
}, {
  icon: Layers,
  name: "Advertisement Design",
  description: "Impactful ads for all mediums"
}, {
  icon: Settings,
  name: "Machine Operations",
  description: "Laser cutting & maintenance"
}];
const tools = [{
  name: "Photoshop",
  level: 95
}, {
  name: "Illustrator",
  level: 95
}, {
  name: "CorelDRAW",
  level: 95
}, {
  name: "InDesign",
  level: 85
}, {
  name: "Figma",
  level: 70
}, {
  name: "After Effects",
  level: 70
}, {
  name: "Premiere Pro",
  level: 65
}];
const Skills = () => {
  return <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
            What I Do
          </span>
          <h2 className="text-4xl font-sans font-extrabold md:text-6xl">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => <div key={index} className="glass-card rounded-2xl p-6 hover-lift group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground font-sans">
                {skill.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {skill.description}
              </p>
            </div>)}
        </div>

        {/* Tools Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center font-sans md:text-4xl">
            Tools I <span className="text-gradient">Master</span>
          </h3>
          <div className="space-y-6 max-w-2xl mx-auto">
            {tools.map((tool, index) => <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-body font-medium text-foreground">{tool.name}</span>
                  <span className="font-body text-muted-foreground">{tool.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{
                width: `${tool.level}%`,
                background: "var(--gradient-primary)"
              }} />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;