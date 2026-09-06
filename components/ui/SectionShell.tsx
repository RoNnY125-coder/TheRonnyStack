import type { SiteSection } from "@/content/types";
import { cn } from "@/lib/cn";
import { Hairline } from "./Hairline";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

type SectionShellProps = {
  section: SiteSection;
  total: number;
  children?: React.ReactNode;
};

export function SectionShell({ section, total, children }: SectionShellProps) {
  const ink = section.field === "ink";

  return (
    <section
      id={section.id}
      aria-label={section.name}
      className={cn(
        "relative min-h-svh px-5 md:px-8 xl:px-10",
        ink ? "bg-ink text-paper" : "bg-paper text-ink",
      )}
    >
      <div className="flex min-h-svh flex-col py-24 md:py-28">
        <Hairline />
        <div className="flex items-start justify-between pt-6">
          <SectionLabel index={section.index} name={section.name} />
          <span className="font-mono text-[11px] tracking-[0.18em] text-current/45 uppercase">
            {section.index} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 items-end pb-8 md:items-center md:pb-0">
          <Reveal>
            {children || (
              <p className="type-display max-w-[12ch] font-bold tracking-[-0.06em]">
                {section.name}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
