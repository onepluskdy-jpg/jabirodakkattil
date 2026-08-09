import Reveal from "./Reveal";

interface SectionHeaderProps {
  index: string;
  title: string;
  meta?: string;
}

const SectionHeader = ({
  index,
  title,
  meta = "Muhammed Jabir A K · Portfolio 2026",
}: SectionHeaderProps) => {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div className="flex items-baseline gap-6">
          <span className="font-body text-xs tracking-[0.25em] text-primary">
            / {index}
          </span>
          <h2 className="font-display uppercase text-3xl md:text-5xl lg:text-6xl leading-none text-foreground">
            {title}
          </h2>
        </div>
        <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {meta}
        </span>
      </div>
      <div className="mt-6 h-px w-full bg-border" />
    </Reveal>
  );
};

export default SectionHeader;
