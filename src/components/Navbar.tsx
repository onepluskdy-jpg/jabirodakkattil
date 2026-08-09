import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 font-display uppercase tracking-wide text-foreground"
        >
          <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground grid place-items-center text-sm">
            J
          </span>
          <span className="text-base md:text-lg">Jabir A K</span>
        </Link>

        {isHomePage && (
          <nav className="hidden md:flex items-center gap-8 rounded-full border border-border bg-card/60 backdrop-blur-xl px-7 py-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full px-5 py-2.5 hover:bg-primary/90 transition-colors"
        >
          Let's talk <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl py-8">
          <div className="flex flex-col items-center gap-6">
            {isHomePage &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display uppercase text-2xl text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-body text-[11px] uppercase tracking-[0.2em] bg-primary text-primary-foreground px-6 py-3 rounded-full"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
