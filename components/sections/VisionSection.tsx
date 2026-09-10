import { site } from "@/content/site";

export function VisionSection() {
  return (
    <section id="capabilities" className="bg-paper text-ink">
      <div className="pad-x py-24 md:py-28">
        <div className="hairline" />
        <div className="section-topline">
          <p className="type-label text-ink/55">08 Capabilities</p>
          <p className="type-label text-ink/35">{site.phrase}</p>
        </div>
        <h2 className="type-headline mt-16 max-w-[10ch] font-black uppercase">
          Built in layers.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-snug text-ink/62 md:text-xl">
          A focused studio practice across the layers that make a business easier to find,
          understand, and choose.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden bg-ink/14 md:grid-cols-4">
          {site.capabilities.map((capability, index) => (
            <article key={capability.name} className="bg-paper p-6 md:min-h-72">
              <p className="type-label text-ink/45">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-16 text-3xl font-black uppercase leading-none md:text-4xl">
                {capability.name}
              </h3>
              <p className="mt-5 max-w-xs text-sm leading-snug text-ink/58">
                {capability.line}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
