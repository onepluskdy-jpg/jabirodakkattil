const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3 font-display uppercase text-lg text-foreground">
          <span className="w-7 h-7 rounded-lg bg-primary text-primary-foreground grid place-items-center text-xs">
            J
          </span>
          Jabir A K
        </div>
        <p className="font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} Muhammed Jabir A K
        </p>
        <div className="flex gap-6 font-body text-[11px] uppercase tracking-[0.25em]">
          <a
            href="https://behance.net/jabirmuhamme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Behance
          </a>
          <a
            href="https://instagram.com/jabir.mkm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
