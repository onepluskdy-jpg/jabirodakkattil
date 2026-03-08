import { Phone, Mail, MapPin, ExternalLink, Send, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4 block">
            Contact
          </span>
          <h2 className="text-5xl font-bold mb-6 font-display md:text-7xl tracking-tight">
            Let's <span className="text-gradient">Talk</span>
          </h2>
        </div>

        {/* Main contact grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <a
            href="tel:+917012418488"
            className="group glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_hsl(40_90%_55%/0.1)]"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
              Phone
            </span>
            <span className="font-display text-lg text-foreground font-semibold block mb-4">
              +91 7012418488
            </span>
            <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Call now <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          {/* Email Card */}
          <a
            href="mailto:muhammedjabirmkm@gmail.com"
            className="group glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_hsl(40_90%_55%/0.1)]"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
              Email
            </span>
            <span className="font-display text-lg text-foreground font-semibold block mb-4 break-all">
              muhammedjabirmkm@gmail.com
            </span>
            <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Send email <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          {/* Location Card */}
          <div className="glass-card rounded-2xl p-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
              Location
            </span>
            <span className="font-display text-lg text-foreground font-semibold block">
              Malappuram, Kerala
            </span>
            <span className="text-muted-foreground text-sm mt-1 block">India</span>
          </div>
        </div>

        {/* Bottom CTA + Socials */}
        <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left max-w-lg">
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-4 leading-tight">
                Have a project in mind?
              </h3>
              <p className="text-muted-foreground font-body text-lg">
                Let's create something amazing together. I'm always open to new ideas and collaborations.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a
                href="mailto:muhammedjabirmkm@gmail.com"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-display font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_hsl(40_90%_55%/0.3)]"
              >
                <Send className="w-5 h-5" />
                Get In Touch
              </a>

              <div className="flex gap-3 justify-center">
                <a
                  href="https://behance.net/jabirmuhamme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body font-medium text-sm"
                >
                  Behance <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com/jabir.mkm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body font-medium text-sm"
                >
                  Instagram <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
