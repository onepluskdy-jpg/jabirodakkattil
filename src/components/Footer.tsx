const Footer = () => {
  return <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-sm">Jabir Portfolio <span className="text-primary">.</span>
        </div>
        <p className="text-muted-foreground font-body text-sm text-center">
          © {new Date().getFullYear()} Muhammed Jabir A K. All rights reserved.
        </p>
        <div className="flex gap-4 text-muted-foreground font-body text-sm">
          <a href="https://behance.net/jabirmuhamme" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Behance
          </a>
          <a href="https://instagram.com/jabirmuhamme" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>;
};
export default Footer;