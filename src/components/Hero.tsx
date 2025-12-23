import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Sparkles, Star, Award, Palette, Gem } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Diamond pattern overlay */}
      <div className="absolute inset-0 diamond-pattern opacity-60" />
      
      {/* Grid overlay */}
      <div className="grid-overlay" />
      
      {/* Hero glow effect */}
      <div className="absolute inset-0 hero-glow" />

      {/* Animated Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated orbs */}
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-secondary/12 rounded-full blur-[100px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[150px]" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-8 h-8 border border-secondary/30 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-40 w-10 h-10 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-secondary/20 rotate-45 animate-float-reverse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/25 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-8 h-8 border border-secondary/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-16 w-3 h-3 bg-secondary/40 rounded-full animate-orbit" />
        
        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={`particle ${i % 2 === 0 ? 'particle-emerald' : ''}`}
            style={{ 
              left: `${10 + i * 10}%`, 
              top: `${55 + (i % 3) * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`
            }} 
          />
        ))}
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
        <div className="absolute bottom-1/4 right-0 w-80 h-px bg-gradient-to-l from-transparent via-secondary/25 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card-glow mb-10 animate-fade-up group hover:scale-105 transition-transform cursor-default">
              <div className="relative">
                <Gem className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-sm font-body text-foreground/90 font-medium tracking-wide">Available for freelance</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
            </div>

            {/* Greeting */}
            <p className="text-muted-foreground font-body text-lg md:text-xl mb-4 animate-fade-up tracking-widest uppercase">
              Hello, I'm
            </p>

            {/* Name with luxury typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 animate-fade-up-delay-1 leading-[0.9] font-display font-bold tracking-tight">
              <span className="block text-foreground">Muhammed</span>
              <span className="block mt-2">
                <span className="text-foreground">Jabir</span>
                <span className="text-shimmer glow-text ml-3">A K</span>
              </span>
            </h1>

            {/* Title with elegant styling */}
            <div className="relative inline-block animate-fade-up-delay-2 mb-10">
              <p className="font-body text-lg md:text-xl lg:text-2xl text-foreground/85 flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                <span className="relative elegant-underline font-medium text-secondary">
                  Graphic Designer
                </span>
                <span className="text-gradient text-xl">◆</span>
                <span className="text-muted-foreground">Creative Visualizer</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mb-12 animate-fade-up-delay-3 leading-relaxed">
              Transforming ideas into <span className="text-gradient font-medium">stunning visuals</span> that captivate audiences and elevate brands with elegance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
                <a href="#portfolio">
                  <span className="relative z-10 flex items-center font-semibold">
                    View Portfolio
                    <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </span>
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4 transition-all group-hover:scale-110 text-secondary" />
                  <span className="font-medium">Let's Talk</span>
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-14 animate-fade-up-delay-4 justify-center lg:justify-start">
              {[
                { value: "3+", label: "Years Experience", icon: Award },
                { value: "50+", label: "Projects Done", icon: Palette },
                { value: "20+", label: "Happy Clients", icon: Sparkles },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left group cursor-default hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-secondary/70 group-hover:text-secondary transition-colors" />
                    <p className="text-3xl font-bold text-foreground font-display group-hover:text-gradient transition-colors">{stat.value}</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-body tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image with luxury frame */}
          <div className="flex-shrink-0 animate-fade-up-delay-3 relative group">
            {/* Outer glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl animate-pulse-glow" />
            
            {/* Decorative spinning rings */}
            <div className="absolute -inset-6 rounded-full border border-dashed border-primary/25 animate-spin-slow" />
            <div className="absolute -inset-12 rounded-full border border-secondary/15 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '35s' }} />
            
            {/* Main image container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-transparent to-secondary/25 blur-xl" />
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full relative z-10 border-2 border-primary/25 group-hover:border-primary/40 transition-all group-hover:scale-[1.02]"
                style={{ boxShadow: 'var(--shadow-glow-intense)' }}
              />
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 glass-card-glow rounded-xl flex items-center justify-center animate-float z-20 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              
              <div className="absolute -bottom-3 -left-4 px-4 py-2.5 glass-card-glow rounded-full animate-float z-20 group-hover:scale-110 transition-transform" style={{ animationDelay: '1s' }}>
                <span className="text-xs font-body font-medium text-foreground flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-secondary fill-secondary/20" />
                  Creative Mind
                </span>
              </div>

              <div className="absolute top-1/2 -right-8 px-4 py-2 glass-gold rounded-full animate-float-reverse z-20 group-hover:scale-110 transition-transform" style={{ animationDelay: '2s' }}>
                <span className="text-xs font-body font-medium text-secondary flex items-center gap-1.5">
                  <Gem className="w-3 h-3" />
                  Premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-secondary transition-colors group">
          <span className="text-xs font-body tracking-[0.25em] uppercase font-medium">Scroll</span>
          <div className="w-6 h-10 border border-current rounded-full flex justify-center pt-2 group-hover:border-secondary transition-colors">
            <div className="w-1 h-2.5 bg-current rounded-full animate-bounce group-hover:bg-secondary transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
