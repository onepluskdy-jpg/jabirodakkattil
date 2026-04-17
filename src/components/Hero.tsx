import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useRef } from "react";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    const el = imageRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute top-10 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-medium" />

        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-primary/40 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-40 left-1/4 w-6 h-6 border-2 border-primary/30 rotate-12 animate-bounce-slow" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary/50 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-primary/60 rounded-full animate-ping-slow" />
        <div className="absolute top-1/4 left-1/2 w-5 h-5 border border-primary/30 rounded-full animate-float-fast" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 border border-primary/40 rotate-45 animate-spin-slow" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

        {/* Radial spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/30 mb-6 animate-fade-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards] backdrop-blur-sm shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-shadow duration-500">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Available for Work</span>
            </div>

            {/* Greeting */}
            <p className="text-muted-foreground font-display text-2xl md:text-3xl lg:text-4xl mb-4 animate-fade-up opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
              Hello! I'm <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            </p>

            {/* Name - Bold with animated gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-[1.1] font-display font-bold">
              <span className="inline-block animate-fade-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] bg-[linear-gradient(110deg,hsl(var(--primary))_0%,hsl(var(--foreground))_50%,hsl(var(--primary))_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
                Muhammed
              </span>
              <br />
              <span className="inline-block animate-fade-up opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards] bg-[linear-gradient(110deg,hsl(var(--primary))_0%,hsl(var(--foreground))_50%,hsl(var(--primary))_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
                Jabir A K
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0 animate-fade-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
              Kerala-based Designer, blending creativity and strategy for global clients
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
              <Button variant="hero" size="lg" className="group rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_25px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)]" asChild>
                <a href="#portfolio">
                  <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Portfolio
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group rounded-full hover:scale-105 transition-transform duration-300 backdrop-blur-sm" asChild>
                <a href="#about">
                  About
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div 
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex-shrink-0 relative animate-fade-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards] transition-transform duration-300 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Solid circular background */}
            <div className="absolute inset-0 bg-foreground rounded-full scale-100" />

            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-spin-very-slow scale-110" />
            <div className="absolute inset-0 rounded-full border border-dashed border-foreground/30 animate-reverse-spin scale-125" />
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-very-slow scale-[1.4]" />

            {/* Multi-layer glow */}
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-3xl animate-pulse-slow scale-110" />
            <div className="absolute inset-0 bg-foreground/20 rounded-full blur-2xl animate-pulse-slow scale-105" />

            {/* Floating accent dots around image */}
            <div className="absolute -top-2 left-1/2 w-3 h-3 bg-primary rounded-full animate-pulse-slow shadow-[0_0_15px_hsl(var(--primary))]" />
            <div className="absolute top-1/2 -right-2 w-2 h-2 bg-primary rounded-full animate-ping-slow" />
            <div className="absolute -bottom-2 left-1/4 w-2 h-2 bg-primary/70 rounded-full animate-pulse-slow" />
            
            <div className="relative group overflow-hidden rounded-full">
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-0 animate-fade-up [animation-delay:1s] [animation-fill-mode:forwards]">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary/50 rounded-full mt-2 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
