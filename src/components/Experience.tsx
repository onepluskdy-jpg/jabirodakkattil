import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Graphic Designer",
    company: "PRIX Creative Hub",
    location: "Kondotty, Kerala",
    period: "2024 – Present",
    description: "Designing Graphics, Preparing Files For Laser Cutting, Setting Up And Operating The Machines, Performing Quality Checks, And Conducting Basic Maintenance."
  },
  {
    type: "work",
    title: "Graphic Designer",
    company: "ADON Signcare",
    location: "Kozhikode, Kerala",
    period: "2023 – 2024",
    description: "Designing Graphics, Preparing Files For Laser Cutting, Setting Up And Operating The Machines, Performing Quality Checks, And Conducting Basic Maintenance."
  },
  {
    type: "work",
    title: "Graphic Designer",
    company: "FEZINN Hotels",
    location: "Kozhikode, Kerala",
    period: "2023 (6 Months)",
    description: "Creative Hotel Designer specializing in functional, guest-focused hospitality spaces that balance aesthetics and comfort. Experienced in space planning, materials, and lighting to enhance brand identity and memorable guest experiences."
  }
];

const education = [
  {
    title: "Diploma in Visualizing & Corporate Advertising",
    institution: "Evoka School of Advertising",
    period: "2022 – 2023",
    description: "Comprehensive training in design principles, branding, and advertising strategies."
  },
  {
    title: "Plus Two Commerce",
    institution: "GVHSS Omanoor",
    period: "2020 – 2022",
    description: "Foundation in business and commerce fundamentals."
  }
];
const Experience = () => {
  return <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
            My Journey
          </span>
          <h2 className="text-4xl font-bold font-sans md:text-6xl">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-sans">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => <div key={index} className="glass-card rounded-2xl p-6 hover-lift relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  <span className="text-primary font-body text-sm font-medium">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-semibold mt-2 mb-1 text-foreground font-sans">
                    {exp.title}
                  </h4>
                  <p className="text-muted-foreground font-body text-sm mb-3">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>)}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-sans">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => <div key={index} className="glass-card rounded-2xl p-6 hover-lift relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  <span className="text-primary font-body text-sm font-medium">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-semibold mt-2 mb-1 text-foreground font-sans">
                    {edu.title}
                  </h4>
                  <p className="text-muted-foreground font-body text-sm mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;