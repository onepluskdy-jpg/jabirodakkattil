import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Sparkles, Star, Zap, Award, Palette } from "lucide-react";
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
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] animate-morph" />
        
        {/* Moving light beam */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse opacity-50" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-primary/10 animate-float" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-primary/50 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-40 w-10 h-10 border-2 border-primary/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-primary/40 rotate-45 animate-float-reverse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/50 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-8 h-8 border border-primary/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-primary/60 rounded-full animate-orbit" />
        
        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{ 
              left: `${10 + i * 12}%`, 
              top: `${60 + (i % 3) * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`
            }} 
          />
        ))}
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-48 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer" />
        <div className="absolute bottom-1/4 right-0 w-64 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent animate-shimmer" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card-glow mb-10 animate-fade-up group hover:scale-105 transition-transform cursor-default">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/30 blur-lg animate-pulse" />
              </div>
              <span className="text-sm font-body text-primary font-semibold tracking-wide">Available for freelance</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>

            {/* Greeting */}
            <p className="text-muted-foreground font-body text-xl md:text-2xl mb-4 animate-fade-up tracking-wider uppercase">
              Hello, I'm
            </p>

            {/* Name with creative styling */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 animate-fade-up-delay-1 leading-[0.85] font-sans font-black tracking-tight">
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
                <span className="text-primary text-2xl animate-pulse">✦</span>
                <span className="text-muted-foreground">Creative Visualizer</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-12 animate-fade-up-delay-3 leading-relaxed">
              Transforming ideas into <span className="text-primary font-semibold relative">stunning visuals<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 rounded-full"></span></span> that captivate audiences and elevate brands.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-wrap gap-5 animate-fade-up-delay-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group relative overflow-hidden text-lg px-8 py-6" asChild>
                <a href="#portfolio">
                  <span className="relative z-10 flex items-center font-semibold">
                    View Portfolio
                    <ArrowDown className="ml-3 h-5 w-5 transition-transform group-hover:translate-y-1 group-hover:scale-110" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group text-lg px-8 py-6" asChild>
                <a href="#contact">
                  <Mail className="mr-3 h-5 w-5 transition-all group-hover:scale-110 group-hover:rotate-12" />
                  <span className="font-semibold">Let's Talk</span>
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-10 mt-16 animate-fade-up-delay-4 justify-center lg:justify-start">
              {[
                { value: "3+", label: "Years Experience", icon: Award },
                { value: "50+", label: "Projects Done", icon: Palette },
                { value: "20+", label: "Happy Clients", icon: Sparkles },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left group cursor-default hover:scale-110 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity group-hover:scale-125" />
                    <p className="text-4xl font-black text-foreground font-sans group-hover:text-primary transition-colors">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-body tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image with creative frame */}
          <div className="flex-shrink-0 animate-scale-in relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-3xl animate-pulse-glow" />
            
            {/* Decorative spinning ring */}
            <div className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/40 animate-[spin_20s_linear_infinite] group-hover:border-primary/60 transition-colors" />
            <div className="absolute -inset-14 rounded-full border border-primary/15 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute -inset-20 rounded-full border border-primary/10 animate-[spin_40s_linear_infinite]" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-90 group-hover:scale-100 transition-transform" />
            
            {/* Main image container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-2xl" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-primary/20 to-transparent blur-xl animate-pulse" />
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-full relative z-10 border-4 border-primary/30 group-hover:border-primary/50 transition-all group-hover:scale-[1.02]"
                style={{ boxShadow: 'var(--shadow-glow-intense)' }}
              />
              
              {/* Floating elements around image */}
              <div className="absolute -top-6 -right-6 w-16 h-16 glass-card-glow rounded-2xl flex items-center justify-center animate-float z-20 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              
              <div className="absolute -bottom-4 -left-6 px-6 py-4 glass-card-glow rounded-full animate-float z-20 group-hover:scale-110 transition-transform" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-body font-semibold text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary/30" />
                  Creative Mind
                </span>
              </div>

              <div className="absolute top-1/2 -right-10 px-5 py-3 glass-card-glow rounded-full animate-float-reverse z-20 group-hover:scale-110 transition-transform" style={{ animationDelay: '2s' }}>
                <span className="text-sm font-body font-semibold text-primary flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Design Expert
                </span>
              </div>

              {/* New floating badge */}
              <div className="absolute top-1/4 -left-8 px-4 py-2 glass-card-glow rounded-lg animate-float z-20" style={{ animationDelay: '3s' }}>
                <span className="text-xs font-body font-medium text-muted-foreground">Since 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs font-body tracking-[0.3em] uppercase font-medium">Scroll</span>
          <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center pt-2.5 group-hover:border-primary transition-colors group-hover:shadow-[0_0_20px_hsl(35_100%_55%_/_0.3)]">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce group-hover:bg-primary transition-colors" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;