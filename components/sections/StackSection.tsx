import { Reveal } from "@/components/motion/Reveal";
import { stackLayers } from "@/content/stack";

export function StackSection() {
  return (
    <section id="stack" className="bg-ink text-paper">
      <div className="pad-x min-h-svh py-24 md:py-28">
        <div className="hairline" />
        <div className="section-topline">
          <p className="type-label text-paper/55">03 The Stack</p>
          <p className="type-label text-paper/35">Identity to systems</p>
        </div>
        <div className="mt-16 grid gap-10 xl:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <h2 className="type-headline max-w-[8ch] font-black uppercase">
              Built in layers.
            </h2>
          </Reveal>
          <div className="stack-list">
            {stackLayers.map((layer) => (
              <article key={layer.id} className="stack-row group">
                <span className="type-label text-acid">{layer.index}</span>
                <h3 className="stack-name">{layer.name}</h3>
                <p className="max-w-sm text-sm leading-snug text-paper/56 md:text-base">
                  {layer.payoff}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
