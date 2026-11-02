import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="bg-ink text-paper">
      <div className="pad-x min-h-svh py-24 md:py-28">
        <div className="hairline" />
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <h2 className="about-title font-black uppercase">
              {site.about.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <div className="max-w-xl">
            <p className="text-xl leading-snug text-paper/68 md:text-2xl">
              {site.about.body}
            </p>
            <p className="mt-8 border-t border-paper/15 pt-5 font-mono text-xs leading-relaxed tracking-[0.12em] text-paper/48 uppercase">
              {site.about.founderLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
