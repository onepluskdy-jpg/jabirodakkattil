const items = [
  "Branding",
  "Packaging",
  "Editorial",
  "Social Media",
  "Identity",
  "Print",
  "Campaigns",
];

const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-border bg-background py-6 md:py-8 overflow-hidden">
      <div className="flex w-max animate-marquee-slow">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 md:gap-14 px-5 md:px-7 shrink-0 font-display uppercase text-3xl md:text-5xl text-foreground"
          >
            {item}
            <span className="text-primary text-2xl md:text-4xl">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
