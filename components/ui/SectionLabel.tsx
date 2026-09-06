import { cn } from "@/lib/cn";

type SectionLabelProps = {
  index: string;
  name: string;
  className?: string;
};

export function SectionLabel({ index, name, className }: SectionLabelProps) {
  return (
    <p className={cn("font-mono text-[11px] tracking-[0.22em] uppercase", className)}>
      <span className="text-acid">{index}</span>
      <span className="text-current/55"> / {name}</span>
    </p>
  );
}
