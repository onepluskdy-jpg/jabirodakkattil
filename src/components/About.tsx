import { Award, Briefcase, Heart, Palette } from "lucide-react";

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience", icon: Briefcase },
    { number: "50+", label: "Projects Completed", icon: Palette },
    { number: "30+", label: "Happy Clients", icon: Heart },
    { number: "7+", label: "Design Tools", icon: Award },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-glow text-primary font-body text-sm uppercase tracking-widest mb-6">
              <Palette className="w-4 h-4" />
              About Me
            </span>
            <h2 className="text-4xl mb-8 leading-tight font-sans font-extrabold md:text-6xl">
              Crafting Visual
              <br />
              <span className="text-gradient glow-text">Experiences</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p className="glass-card rounded-2xl p-6 border-l-4 border-primary/50">
                I'm a passionate graphic designer with over <span className="text-primary font-semibold">3+ years of experience</span> in 
                creating compelling visual solutions for brands across various industries.
              </p>
              <p>
                My expertise spans <span className="text-foreground font-medium">branding, logo design, digital graphics, 
                social media creatives, packaging, and print production</span>. I believe in the power of 
                design to tell stories and create meaningful connections between brands and their audiences.
              </p>
              <p>
                Beyond digital design, I bring hands-on experience in <span className="text-foreground font-medium">laser cutting operations, 
                printing file preparation, die setup, and basic machine maintenance</span> — giving me a 
                comprehensive understanding of the entire production process.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-card rounded-3xl p-8 hover-lift text-center group cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl glass-card-glow flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-4xl md:text-5xl font-bold text-gradient block mb-2 font-sans">
                  {stat.number}
                </span>
                <span className="text-muted-foreground font-body text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
