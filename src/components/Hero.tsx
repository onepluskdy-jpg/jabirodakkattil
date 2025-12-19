import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-muted-foreground font-body text-lg md:text-xl mb-4 animate-fade-up tracking-wide">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl mb-6 animate-fade-up-delay-1 leading-tight font-sans font-extrabold lg:text-7xl">
              Muhammed Jabir
              <span className="text-gradient"> A K</span>
            </h1>

            {/* Title */}
            <p className="font-body text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-6 animate-fade-up-delay-2">
              Graphic Designer <span className="text-primary">|</span> Creative Visualizer
            </p>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-up-delay-3 leading-relaxed">
              Designing impactful visuals that connect brands with people.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio">
                  View Portfolio
                  <ArrowDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Location Badge */}
            <div className="mt-16 animate-fade-up-delay-4">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground font-body">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Based in Malappuram, Kerala
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Muhammed Jabir A K - Graphic Designer" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default Hero;
