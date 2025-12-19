import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Check, 
  Palette, 
  Image, 
  FileText, 
  Megaphone,
  Send,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete visual identity including logo, color palette, typography, and brand guidelines.",
    features: ["Logo Design", "Color System", "Typography", "Brand Guidelines"]
  },
  {
    icon: Image,
    title: "Social Media Design",
    description: "Eye-catching graphics for all social platforms that boost engagement and brand awareness.",
    features: ["Post Designs", "Stories/Reels", "Cover Images", "Ad Creatives"]
  },
  {
    icon: FileText,
    title: "Print Design",
    description: "Professional print materials from business cards to large format banners.",
    features: ["Business Cards", "Brochures", "Flyers", "Banners"]
  },
  {
    icon: Megaphone,
    title: "Marketing Materials",
    description: "Compelling visuals for campaigns that drive conversions and build brand recognition.",
    features: ["Email Templates", "Presentations", "Infographics", "Promotional Materials"]
  }
];

const packages = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Perfect for small projects and quick turnarounds",
    features: [
      "Single design project",
      "2 revision rounds",
      "Source files included",
      "3-5 day delivery",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "₹12,999",
    description: "Ideal for businesses needing comprehensive design work",
    features: [
      "Up to 5 design projects",
      "Unlimited revisions",
      "Source files included",
      "Priority delivery",
      "Phone & email support",
      "Brand consistency review"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For brands requiring ongoing creative partnership",
    features: [
      "Unlimited design projects",
      "Dedicated designer",
      "Same-day revisions",
      "24/7 priority support",
      "Monthly strategy calls",
      "Full brand management"
    ],
    popular: false
  }
];

const HireMe = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm">Back to Portfolio</span>
          </Link>
          <span className="font-sans font-bold text-lg">Hire Me<span className="text-primary">.</span></span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-32 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[80px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary font-medium">Let's create something amazing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-extrabold mb-6">
            Transform Your <span className="text-gradient">Vision</span> Into Reality
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Ready to elevate your brand with stunning visuals? Let's collaborate and bring your creative ideas to life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Services I Offer</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Comprehensive design solutions tailored to your brand's unique needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover-lift"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-sans font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-body text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Pricing Packages</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Flexible options designed to fit projects of all sizes and budgets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-card border rounded-2xl p-8 ${
                  pkg.popular 
                    ? 'border-primary shadow-lg shadow-primary/10 scale-105' 
                    : 'border-border'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-body font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-sans font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-3">
                    <span className="text-4xl font-sans font-extrabold">{pkg.price}</span>
                    {pkg.price !== "Custom" && <span className="text-muted-foreground font-body">/project</span>}
                  </div>
                  <p className="text-sm text-muted-foreground font-body">{pkg.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.popular ? "hero" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <a href="#contact-form">Get Started</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                Let's Start Your Project
              </h2>
              <p className="text-muted-foreground font-body mb-10 text-lg">
                Fill out the form and I'll get back to you within 24 hours. Let's discuss how we can work together to achieve your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Email</p>
                    <p className="font-body font-medium">jabirmuhammed@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Phone</p>
                    <p className="font-body font-medium">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Location</p>
                    <p className="font-body font-medium">Malappuram, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium mb-2">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="brand">Brand Identity</option>
                      <option value="social">Social Media Design</option>
                      <option value="print">Print Design</option>
                      <option value="marketing">Marketing Materials</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select your budget</option>
                    <option value="starter">₹5,000 - ₹10,000</option>
                    <option value="professional">₹10,000 - ₹25,000</option>
                    <option value="enterprise">₹25,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium mb-2">Project Details *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and timeline..."
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Muhammed Jabir A K. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HireMe;
