import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const CaseStudy = () => {
  const { slug } = useParams();

  const title = (slug ?? "untitled-project")
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="pt-32 md:pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>

          <Reveal>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Case Study
            </span>
            <h1 className="mt-4 font-display font-extrabold uppercase tracking-tight leading-[0.95] text-5xl md:text-7xl text-foreground">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 grid md:grid-cols-3 gap-8 border-y border-border py-8 font-body text-sm">
              <div>
                <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Client
                </span>
                <span className="text-foreground">Confidential</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Year
                </span>
                <span className="text-foreground">2024</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Scope
                </span>
                <span className="text-foreground">
                  Identity, Print, Social
                </span>
              </div>
            </div>
          </Reveal>

          {/* Process */}
          <Reveal delay={160}>
            <section className="mt-20 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-3">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  01 — Process
                </span>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
                  How we got there.
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Detailed process notes, sketches, exploration, and the
                  decisions behind the final direction live here. Replace this
                  placeholder with the real story when you're ready.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Outcome */}
          <Reveal delay={200}>
            <section className="mt-20 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-3">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  02 — Outcome
                </span>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">
                  What it shipped as.
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Outcome metrics, screenshots of the live work, and notes on
                  rollout go here. A clear before / after lands hardest.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-24 pt-12 border-t border-border flex items-center justify-between">
              <span className="font-body text-sm text-muted-foreground">
                Like what you see?
              </span>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 font-display font-medium text-foreground hover:text-primary transition-colors"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudy;
