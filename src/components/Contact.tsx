import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground mb-12">
              Have a project<br />in mind?
            </h2>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-16">
              Available for freelance, contract, and collaborative work. Reach out
              and let's build something worth looking at.
            </p>

            {/* Contact rows */}
            <ul className="divide-y divide-border border-y border-border">
              <li>
                <a
                  href="mailto:muhammedjabirmkm@gmail.com"
                  className="flex items-center justify-between py-6 group"
                >
                  <div>
                    <span className="block font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                      Email
                    </span>
                    <span className="font-display text-2xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                      muhammedjabirmkm@gmail.com
                    </span>
                  </div>
                  <ArrowUpRight className="w-7 h-7 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+917012418488"
                  className="flex items-center justify-between py-6 group"
                >
                  <div>
                    <span className="block font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                      Phone
                    </span>
                    <span className="font-display text-2xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                      +91 70124 18488
                    </span>
                  </div>
                  <ArrowUpRight className="w-7 h-7 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/jabir.mkm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-6 group"
                >
                  <div>
                    <span className="block font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                      Instagram
                    </span>
                    <span className="font-display text-2xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                      @jabir.mkm
                    </span>
                  </div>
                  <ArrowUpRight className="w-7 h-7 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net/jabirmuhamme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-6 group"
                >
                  <div>
                    <span className="block font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                      Behance
                    </span>
                    <span className="font-display text-2xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                      jabirmuhamme
                    </span>
                  </div>
                  <ArrowUpRight className="w-7 h-7 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
            </ul>

            <div className="mt-12 font-body text-base text-muted-foreground">
              Based in Malappuram, Kerala — working worldwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
