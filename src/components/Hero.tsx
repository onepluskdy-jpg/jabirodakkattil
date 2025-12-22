import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Sparkles, Star, Zap, Award, Palette, Code } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding noise-overlay">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Aurora effect */}
      <div className="aurora" />
      
      {/* Grid overlay */}
      <div className="grid-overlay" />
      
      {/* Hero glow effect */}
      <div className="absolute inset-0 hero-glow" />

      {/* Animated Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated orbs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/10 rounded-full blur-[180px] animate-morph" />
        
        {/* Floating geometric shapes - Purple */}
        <div className="absolute top-20 left-20 w-10 h-10 border-2 border-primary/50 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-40 w-12 h-12 border-2 border-secondary/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-accent/40 rotate-45 animate-float-reverse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-primary/50 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-10 h-10 border border-secondary/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-16 w-4 h-4 bg-secondary/60 rounded-full animate-orbit" />
        
        {/* Particles - Multi color */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`particle ${i % 3 === 0 ? 'particle-purple' : i % 3 === 1 ? 'particle-pink' : ''}`}
            style={{ 
              left: `${5 + i * 8}%`, 
              top: `${50 + (i % 4) * 12}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${7 + i}s`
            }} 
          />
        ))}
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
        <div className="absolute bottom-1/4 right-0 w-80 h-px bg-gradient-to-l from-transparent via-secondary/40 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-0 w-40 h-px bg-gradient-to-r from-accent/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card-glow mb-10 animate-fade-up group hover:scale-105 transition-transform cursor-default">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                <div className="absolute inset-0 bg-secondary/40 blur-lg animate-pulse" />
              </div>
              <span className="text-sm font-body text-foreground font-semibold tracking-wide">Available for freelance</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
            </div>

            {/* Greeting */}
            <p className="text-muted-foreground font-body text-xl md:text-2xl mb-4 animate-fade-up tracking-wider uppercase">
              Hello, I'm
            </p>

            {/* Name with creative styling */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 animate-fade-up-delay-1 leading-[0.85] font-display font-extrabold tracking-tight">
              <span className="block text-foreground">Muhammed</span>
              <span className="block mt-3">
                <span className="text-foreground">Jabir</span>
                <span className="text-shimmer glow-text ml-4">A K</span>
              </span>
            </h1>

            {/* Title with animated underline */}
            <div className="relative inline-block animate-fade-up-delay-2 mb-10">
              <p className="font-body text-xl md:text-2xl lg:text-3xl text-foreground/90 flex items-center gap-4 flex-wrap justify-center lg:justify-start">
                <span className="relative name-highlight font-semibold">
                  Graphic Designer
                </span>
                <span className="text-gradient text-2xl animate-pulse">✦</span>
                <span className="text-muted-foreground">Creative Visualizer</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-12 animate-fade-up-delay-3 leading-relaxed">
              Transforming ideas into <span className="text-gradient font-semibold">stunning visuals</span> that captivate audiences and elevate brands.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-wrap gap-5 animate-fade-up-delay-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group relative overflow-hidden text-lg px-8 py-6" asChild>
                <a href="#portfolio">
                  <span className="relative z-10 flex items-center font-bold">
                    View Portfolio
                    <ArrowDown className="ml-3 h-5 w-5 transition-transform group-hover:translate-y-1 group-hover:scale-110" />
                  </span>
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group text-lg px-8 py-6" asChild>
                <a href="#contact">
                  <Mail className="mr-3 h-5 w-5 transition-all group-hover:scale-110 group-hover:rotate-12 text-secondary" />
                  <span className="font-semibold">Let's Talk</span>
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-10 mt-16 animate-fade-up-delay-4 justify-center lg:justify-start">
              {[
                { value: "3+", label: "Years Experience", icon: Award, color: "text-primary" },
                { value: "50+", label: "Projects Done", icon: Palette, color: "text-secondary" },
                { value: "20+", label: "Happy Clients", icon: Sparkles, color: "text-accent" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left group cursor-default hover:scale-110 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity group-hover:scale-125`} />
                    <p className={`text-4xl font-black text-foreground font-display group-hover:text-gradient transition-colors`}>{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-body tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image with creative frame */}
          <div className="flex-shrink-0 animate-scale-in relative group">
            {/* Outer glow rings */}
            <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 blur-3xl animate-pulse-glow" />
            
            {/* Decorative spinning rings */}
            <div className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/40 animate-[spin_15s_linear_infinite] group-hover:border-primary/60 transition-colors" />
            <div className="absolute -inset-14 rounded-full border border-secondary/20 animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute -inset-20 rounded-full border border-accent/15 animate-[spin_35s_linear_infinite]" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 rounded-full blur-3xl scale-90 group-hover:scale-100 transition-transform" />
            
            {/* Main image container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/40 blur-2xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-secondary/30 to-transparent blur-xl animate-pulse" />
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-full relative z-10 border-4 border-primary/30 group-hover:border-primary/50 transition-all group-hover:scale-[1.02]"
                style={{ boxShadow: 'var(--shadow-glow-intense)' }}
              />
              
              {/* Floating elements around image */}
              <div className="absolute -top-6 -right-6 w-16 h-16 glass-card-glow rounded-2xl flex items-center justify-center animate-float z-20 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              
              <div className="absolute -bottom-4 -left-6 px-6 py-4 glass-card-glow rounded-full animate-float z-20 group-hover:scale-110 transition-transform" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-body font-semibold text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent fill-accent/30" />
                  Creative Mind
                </span>
              </div>

              <div className="absolute top-1/2 -right-10 px-5 py-3 glass-card-glow rounded-full animate-float-reverse z-20 group-hover:scale-110 transition-transform" style={{ animationDelay: '2s' }}>
                <span className="text-sm font-body font-semibold text-secondary flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Design Expert
                </span>
              </div>

              {/* New floating badge */}
              <div className="absolute top-1/4 -left-8 px-4 py-2 glass-card-glow rounded-lg animate-float z-20" style={{ animationDelay: '3s' }}>
                <span className="text-xs font-body font-medium text-muted-foreground flex items-center gap-1">
                  <Code className="w-3 h-3 text-primary" />
                  Since 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group">
          <span className="text-xs font-body tracking-[0.3em] uppercase font-medium">Scroll</span>
          <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center pt-2.5 group-hover:border-secondary transition-colors group-hover:shadow-[0_0_20px_hsl(190_95%_50%_/_0.4)]">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce group-hover:bg-secondary transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;