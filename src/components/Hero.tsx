import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src={profileImage}
          alt="Muhammed Jabir A K — Graphic Designer"
          className="w-full h-full object-cover object-center grayscale"
        />
        {/* Editorial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-32">
        {/* Top meta */}
        <div className="absolute top-32 left-6 md:left-12 right-6 md:right-12 flex flex-wrap items-center justify-between gap-4 text-sm font-body text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="uppercase tracking-[0.2em]">Open to Work</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Kerala, India</span>
          </div>
        </div>

        {/* Main editorial block */}
        <div className="max-w-4xl">
          <p className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Muhammed Jabir A K · @jabir.mkm
          </p>

          <h1 className="font-display font-bold leading-[0.95] tracking-tight text-foreground text-[18vw] md:text-[14vw] lg:text-[10rem] xl:text-[12rem]">
            Graphic
            <br />
            Designer
          </h1>

          <p className="mt-8 max-w-2xl font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm Jabir, a Kerala-based graphic designer helping brands and startups
            build clear, considered visual identities that turn attention into trust.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 h-12 font-body font-medium"
            >
              <a href="#portfolio">
                View Work
                <ArrowUpRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full border border-border hover:bg-foreground/5 px-8 h-12 font-body font-medium text-foreground"
            >
              <a href="#contact">Start a Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
