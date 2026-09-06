import { site } from "@/content/site";

export function VisionSection() {
  return (
    <section id="vision" className="bg-paper text-ink">
      <div className="pad-x py-24 md:py-28">
        <div className="hairline" />
        <div className="section-topline">
          <p className="type-label text-ink/55">08 Vision</p>
          <p className="type-label text-ink/35">{site.phrase}</p>
        </div>
        <h2 className="type-headline mt-16 max-w-[10ch] font-black uppercase">
          {site.vision.kicker}
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden bg-ink/14 md:grid-cols-4">
          {site.vision.stages.map((stage) => (
            <article key={stage.when} className="bg-paper p-6 md:min-h-72">
              <p className="type-label text-ink/45">{stage.when}</p>
              <h3 className="mt-16 text-3xl font-black uppercase leading-none md:text-4xl">
                {stage.what}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
