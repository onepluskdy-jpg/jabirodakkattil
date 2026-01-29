import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [{
  name: "About",
  href: "#about"
}, {
  name: "Skills",
  href: "#skills"
}, {
  name: "Experience",
  href: "#experience"
}, {
  name: "Portfolio",
  href: "#portfolio"
}, {
  name: "Contact",
  href: "#contact"
}];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/50 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold font-display text-2xl text-foreground">
          Jabir<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHomePage && navLinks.map(link => <a key={link.name} href={link.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>)}
          <Button variant="hero" size="sm" asChild>
            <Link to="/hire-me">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 py-6">
          <div className="flex flex-col items-center gap-6">
            {isHomePage && navLinks.map(link => <a key={link.name} href={link.href} className="font-body text-lg text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>)}
            <Button variant="hero" asChild>
              <Link to="/hire-me" onClick={() => setIsMobileMenuOpen(false)}>
                Hire Me
              </Link>
            </Button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;
