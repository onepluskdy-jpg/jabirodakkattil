import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#portfolio" },
  { name: "Words", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "top-3" : "top-6"
      }`}
    >
      <div
        className={`flex items-center gap-2 md:gap-6 bg-card/70 backdrop-blur-2xl border border-border/60 rounded-full shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out ${
          isScrolled
            ? "pl-4 pr-1.5 py-1.5 scale-[0.92]"
            : "pl-5 pr-2 py-2"
        }`}
      >
        <Link
          to="/"
          className={`flex items-center gap-2 font-display font-bold text-foreground border-border transition-all duration-500 ${
            isScrolled
              ? "text-sm md:text-base pr-2 md:pr-3 md:border-r"
              : "text-base md:text-lg pr-2 md:pr-4 md:border-r"
          }`}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-primary" />
          Jabir
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {isHomePage &&
            navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          <a
            href="#contact"
            className={`font-body bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-medium ${
              isScrolled ? "text-xs px-4 py-1.5" : "text-sm px-5 py-2"
            }`}
          >
            Resume ↓
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-xl border border-border rounded-2xl py-6">
          <div className="flex flex-col items-center gap-6">
            {isHomePage &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-body text-sm bg-primary text-primary-foreground px-5 py-2 rounded-full"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
