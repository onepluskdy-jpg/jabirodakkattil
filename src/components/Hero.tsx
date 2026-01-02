import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Briefcase, CheckCircle, Users } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card mb-10 animate-fade-up">
              <span className="text-sm font-body text-muted-foreground tracking-wide">Available for freelance</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
              </span>
            </div>

            {/* Greeting */}
            <p className="text-muted-foreground font-body text-base md:text-lg mb-4 animate-fade-up tracking-widest uppercase font-medium">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 animate-fade-up-delay-1 leading-[1] font-display">
              <span className="block text-foreground">Muhammed</span>
              <span className="block text-foreground italic mt-1">Jabir A K</span>
            </h1>

            {/* Title */}
            <div className="animate-fade-up-delay-2 mb-10">
              <p className="font-body text-lg md:text-xl text-muted-foreground">
                <span className="text-foreground font-medium">Graphic Designer</span>
                <span className="mx-3 text-border">—</span>
                <span>Creative Visualizer</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-md mb-12 animate-fade-up-delay-3 leading-relaxed mx-auto lg:mx-0">
              Transforming ideas into stunning visuals that captivate audiences and elevate brands with precision and care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#portfolio">
                  View Portfolio
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Let's Talk
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-12 mt-16 animate-fade-up-delay-4 justify-center lg:justify-start">
              {[
                { value: "3+", label: "Years", icon: Briefcase },
                { value: "50+", label: "Projects", icon: CheckCircle },
                { value: "20+", label: "Clients", icon: Users },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-3xl md:text-4xl font-display text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-body tracking-widest uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-up-delay-3 relative">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
                style={{ boxShadow: 'var(--shadow-elevated)' }}
              />
              
              {/* Simple frame accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-border -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
          <span className="text-xs font-body tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-border group-hover:bg-foreground transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;