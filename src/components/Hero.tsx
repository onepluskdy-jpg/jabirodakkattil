import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding">
      {/* Animated Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 border-2 border-primary/30 rotate-45 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-40 w-6 h-6 border-2 border-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary/20 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-5 h-5 border border-primary/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-primary font-medium">Available for freelance</span>
            </div>

            {/* Greeting */}
            <p className="text-muted-foreground font-body text-lg md:text-xl mb-4 animate-fade-up tracking-wide">
              Hello, I'm
            </p>

            {/* Name with creative styling */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-up-delay-1 leading-[0.9] font-sans font-extrabold">
              <span className="block">Muhammed</span>
              <span className="block mt-2">
                Jabir<span className="text-gradient"> A K</span>
              </span>
            </h1>

            {/* Title with animated underline */}
            <div className="relative inline-block animate-fade-up-delay-2">
              <p className="font-body text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8">
                <span className="relative">
                  Graphic Designer
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/50" />
                </span>
                <span className="text-primary mx-3">•</span>
                <span className="text-muted-foreground">Creative Visualizer</span>
              </p>
            </div>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up-delay-3 leading-relaxed">
              Transforming ideas into <span className="text-foreground font-medium">stunning visuals</span> that captivate audiences and elevate brands.
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
            <div className="flex flex-wrap gap-8 mt-12 animate-fade-up-delay-4 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground font-sans">3+</p>
                <p className="text-sm text-muted-foreground font-body">Years Experience</p>
              </div>
              <div className="w-px bg-border h-12 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground font-sans">50+</p>
                <p className="text-sm text-muted-foreground font-body">Projects Done</p>
              </div>
              <div className="w-px bg-border h-12 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground font-sans">20+</p>
                <p className="text-sm text-muted-foreground font-body">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Profile Image with creative frame */}
          <div className="flex-shrink-0 animate-scale-in relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-90" />
            
            {/* Main image container */}
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-full relative z-10 shadow-2xl"
              />
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg animate-float z-20">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <div className="absolute -bottom-2 -left-2 px-4 py-2 bg-card rounded-full shadow-lg border border-border animate-float z-20" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-body font-medium text-foreground">✨ Creative Mind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>;
};
export default Hero;
