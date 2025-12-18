const About = () => {
  return <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
              About Me
            </span>
            <h2 className="text-4xl mb-8 leading-tight font-sans font-extrabold md:text-6xl">
              Crafting Visual
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                I'm a passionate graphic designer with over <span className="text-foreground font-medium">3+ years of experience</span> in 
                creating compelling visual solutions for brands across various industries.
              </p>
              <p>
                My expertise spans <span className="text-foreground font-medium">branding, logo design, digital graphics, 
                social media creatives, packaging, and print production</span>. I believe in the power of 
                design to tell stories and create meaningful connections between brands and their audiences.
              </p>
              <p>
                Beyond digital design, I bring hands-on experience in <span className="text-foreground font-medium">laser cutting operations, 
                printing file preparation, die setup, and basic machine maintenance</span> — giving me a 
                comprehensive understanding of the entire production process.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[{
            number: "3+",
            label: "Years Experience"
          }, {
            number: "50+",
            label: "Projects Completed"
          }, {
            number: "30+",
            label: "Happy Clients"
          }, {
            number: "6+",
            label: "Design Tools"
          }].map((stat, index) => <div key={index} className="glass-card rounded-2xl p-8 hover-lift text-center">
                <span className="text-4xl md:text-5xl font-bold text-gradient block mb-2 font-sans">
                  {stat.number}
                </span>
                <span className="text-muted-foreground font-body text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;