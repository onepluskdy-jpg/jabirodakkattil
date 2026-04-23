import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Jabir turned a vague brief into an identity that finally felt like us. Sharp instincts, fast turnarounds, zero drama.",
    name: "Anand R.",
    role: "Founder, Zé Cha!",
  },
  {
    quote:
      "He gets brand. Every poster, menu, and post we shipped during the campaign moved in the same direction.",
    name: "Sneha M.",
    role: "Marketing Lead, Fez Inn",
  },
  {
    quote:
      "Reliable, considered, and obsessive about print details. Our packaging finally looks like the product deserves.",
    name: "Rahul K.",
    role: "Co-founder, Marrakesh",
  },
  {
    quote:
      "Working with Jabir is the closest thing to having an in-house design lead without the overhead.",
    name: "Fatima A.",
    role: "Campaign Manager",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  const goTo = (i: number) => {
    setIndex(i);
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setIndex((p) => (p + 1) % testimonials.length);
    }, 5500);
  };

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 md:px-12 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <Reveal>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Words
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-16">
                Kind notes from people I've worked with.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative min-h-[260px] md:min-h-[200px]">
                <Quote className="w-10 h-10 text-primary mb-6" />
                <div key={index} className="animate-fade-up">
                  <p className="font-display font-medium text-2xl md:text-3xl lg:text-4xl leading-snug text-foreground max-w-4xl">
                    "{active.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-3 font-body text-sm">
                    <span className="block w-8 h-px bg-primary" />
                    <span className="text-foreground font-medium">
                      {active.name}
                    </span>
                    <span className="text-muted-foreground">· {active.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Dots */}
            <div className="mt-12 flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-10 bg-primary"
                      : "w-4 bg-border hover:bg-muted-foreground/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
