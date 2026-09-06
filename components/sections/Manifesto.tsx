import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-paper text-ink">
      <div className="pad-x min-h-svh py-24 md:py-28">
        <div className="hairline" />
        <div className="section-topline">
          <p className="type-label text-ink/55">02 Manifesto</p>
          <p className="type-label text-ink/35">One coherent presence</p>
        </div>
        <Reveal className="mt-16 max-w-6xl">
          {site.manifesto.map((line) => (
            <p key={line} className="manifesto-line font-black uppercase">
              {line}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
