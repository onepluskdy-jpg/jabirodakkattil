import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-foreground font-display text-2xl md:text-3xl lg:text-4xl mb-4 animate-fade-up">
              Hello! I'm
            </p>

            {/* Name - Bold */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 animate-fade-up-delay-1 leading-[1.1] font-display font-bold text-primary">
              Muhammed
              <br />
              Jabir A K
            </h1>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-lg mb-10 animate-fade-up-delay-2 leading-relaxed mx-auto lg:mx-0">
              Kerala-based Designer, blending creativity and strategy for global clients
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group rounded-full" asChild>
                <a href="#portfolio">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Portfolio
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group rounded-full" asChild>
                <a href="#about">
                  About
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-up-delay-3 relative">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-cover grayscale transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
