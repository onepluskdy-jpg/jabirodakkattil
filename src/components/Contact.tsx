import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold mb-6 font-sans md:text-6xl">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 border">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 font-sans">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:+917012418488" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block">Phone</span>
                    <span className="font-body text-foreground font-medium">+91 7012418488</span>
                  </div>
                </a>

                <a href="mailto:muhammedjabirmkm@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block">Email</span>
                    <span className="font-body text-foreground font-medium">muhammedjabirmkm@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block">Location</span>
                    <span className="font-body text-foreground font-medium">Malappuram, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 font-sans">Follow My Work</h3>
              <div className="flex gap-4">
                <a href="https://behance.net/jabirmuhamme" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all font-body font-medium">
                  Behance
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all font-body font-medium" href="https://instagram.com/jabir.mkm">
                  Instagram
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="glass-card p-8 md:p-12 relative overflow-hidden rounded-full flex-col flex items-center justify-center px-0 py-0">
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 leading-tight font-sans md:text-5xl">
                Ready to bring your
                <br />
                <span className="text-gradient">vision to life?</span>
              </h3>
              <p className="text-muted-foreground font-body mb-8 text-lg">
                Whether you need a complete brand identity, social media graphics, or print materials, 
                I'm here to help transform your ideas into impactful designs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:muhammedjabirmkm@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:+917012418488">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;