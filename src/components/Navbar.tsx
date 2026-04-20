import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-xl text-foreground">
          Jabir<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
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
            className="font-body text-sm bg-foreground text-background px-5 py-2 rounded-full hover:bg-foreground/90 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-6">
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
              className="font-body text-sm bg-foreground text-background px-5 py-2 rounded-full"
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
