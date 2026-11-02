import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  return (
    <section id="process" className="bg-paper text-ink">
      <div className="pad-x min-h-svh py-24 md:py-28">
        <div className="hairline" />
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="type-headline max-w-[9ch] font-black uppercase">
              Discover. Strategize. Grow.
            </h2>
          </Reveal>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <article key={step.id} className="timeline-step">
                <span className="type-label text-acid">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-3xl font-black uppercase md:text-5xl">
                    {step.name}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-snug text-ink/62 md:text-lg">
                    {step.line}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
