import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Sparkles, Star, Zap } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding noise-overlay">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Hero glow effect */}
      <div className="absolute inset-0 hero-glow" />

      {/* Animated Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated orbs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] animate-morph" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-6 h-6 border-2 border-primary/40 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-40 w-8 h-8 border-2 border-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-primary/30 rotate-45 animate-float-reverse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-6 h-6 border border-primary/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-primary/50 rounded-full animate-orbit" />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
        <div className="absolute bottom-1/4 right-0 w-48 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card-glow mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-primary font-medium">Available for freelance</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            {/* Greeting */}
            <p className="text-muted-foreground font-body text-lg md:text-xl mb-4 animate-fade-up tracking-wide">
              Hello, I'm
            </p>

            {/* Name with creative styling */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-up-delay-1 leading-[0.9] font-sans font-extrabold">
              <span className="block">Muhammed</span>
              <span className="block mt-2">
                Jabir<span className="text-gradient glow-text"> A K</span>
              </span>
            </h1>

            {/* Title with animated underline */}
            <div className="relative inline-block animate-fade-up-delay-2">
              <p className="font-body text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8">
                <span className="relative">
                  Graphic Designer
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-full" />
                </span>
                <span className="text-primary mx-3">✦</span>
                <span className="text-muted-foreground">Creative Visualizer</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up-delay-3 leading-relaxed">
              Transforming ideas into <span className="text-primary font-medium">stunning visuals</span> that captivate audiences and elevate brands.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
                <a href="#portfolio">
                  <span className="relative z-10 flex items-center">
                    View Portfolio
                    <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  </span>
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Let's Talk
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14 animate-fade-up-delay-4 justify-center lg:justify-start">
              {[
                { value: "3+", label: "Years Experience", icon: Star },
                { value: "50+", label: "Projects Done", icon: Zap },
                { value: "20+", label: "Happy Clients", icon: Sparkles },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left group cursor-default">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-3xl font-bold text-foreground font-sans group-hover:text-primary transition-colors">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image with creative frame */}
          <div className="flex-shrink-0 animate-scale-in relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl animate-pulse-glow" />
            
            {/* Decorative spinning ring */}
            <div className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/30 animate-[spin_25s_linear_infinite]" />
            <div className="absolute -inset-10 rounded-full border border-primary/10 animate-[spin_35s_linear_infinite_reverse]" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/25 rounded-full blur-3xl scale-90" />
            
            {/* Main image container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-xl" />
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-cover rounded-full relative z-10 border-4 border-primary/20"
                style={{ boxShadow: 'var(--shadow-glow-intense)' }}
              />
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-14 h-14 glass-card-glow rounded-2xl flex items-center justify-center animate-float z-20">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              
              <div className="absolute -bottom-2 -left-4 px-5 py-3 glass-card-glow rounded-full animate-float z-20" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-body font-medium text-foreground flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Creative Mind
                </span>
              </div>

              <div className="absolute top-1/2 -right-8 px-4 py-2 glass-card-glow rounded-full animate-float-reverse z-20" style={{ animationDelay: '2s' }}>
                <span className="text-xs font-body font-medium text-primary">Design Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 group-hover:border-primary transition-colors">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce group-hover:bg-primary transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
