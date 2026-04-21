const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
          <span className="inline-block w-2 h-2 rounded-full bg-primary" />
          Jabir
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammed Jabir A K. All rights reserved.
        </p>
        <div className="flex gap-6 font-body text-sm">
          <a
            href="https://behance.net/jabirmuhamme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Behance
          </a>
          <a
            href="https://instagram.com/jabir.mkm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
