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
  return (
    <section id="skills" className="section-padding relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-glow text-primary font-body text-sm uppercase tracking-widest mb-6">
            What I Do
          </span>
          <h2 className="text-4xl font-sans font-extrabold md:text-6xl">
            Skills & <span className="text-gradient glow-text">Expertise</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-6 hover-lift group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl glass-card-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground font-sans group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          
          <h3 className="text-2xl font-bold mb-10 text-center font-sans md:text-4xl relative z-10">
            Tools I <span className="text-gradient">Master</span>
          </h3>
          <div className="space-y-8 max-w-2xl mx-auto relative z-10">
            {tools.map((tool, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</span>
                  <span className="font-body text-primary font-medium">{tool.level}%</span>
                </div>
                <div className="h-3 bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden" 
                    style={{
                      width: `${tool.level}%`,
                      background: "var(--gradient-primary)"
                    }}
                  >
                    <div className="absolute inset-0 animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;