const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              About
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-12">
              I design brand identities and visuals that help businesses look
              clear, intentional, and worth remembering.
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 3 years of experience across branding, social media,
                packaging, and print, I work with founders and teams to translate
                strategy into design that ships.
              </p>
              <p>
                My background also covers production — laser cutting, print file
                preparation, die setup — so I understand how a design behaves once
                it leaves the screen.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
              {[
                { n: "3+", l: "Years" },
                { n: "50+", l: "Projects" },
                { n: "30+", l: "Clients" },
                { n: "7+", l: "Tools" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-bold text-4xl md:text-5xl text-foreground mb-2">
                    {s.n}
                  </div>
                  <div className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
