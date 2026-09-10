import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";
import { HeroTitle } from "./HeroTitle";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="TheRonnyStack hero"
      className="relative isolate min-h-svh overflow-hidden bg-paper text-ink"
    >
      <div className="pad-x grid min-h-svh grid-rows-[auto_1fr_auto] pt-20 pb-7 md:pt-22">
        <div className="hero-hairline hairline" />
        <Reveal className="relative z-10 mx-auto w-full self-center text-center">
          <p className="type-label mb-5 text-ink/50">{site.tagline}</p>
          <HeroTitle />
          <div className="mx-auto mt-8 max-w-2xl">
            <p className="hero-kicker">Digital presence, built to grow.</p>
            <p className="hero-subtitle mx-auto mt-4 max-w-xl leading-snug text-ink/68">
              We build websites, design digital experiences, improve search visibility,
              and create systems that help businesses get discovered, trusted, and chosen.
            </p>
            <div className="hero-actions mt-8 justify-center">
              <a className="button-primary" href="#contact">
                Start a project <span aria-hidden>↗</span>
              </a>
              <a className="button-secondary" href="#work">
                View our work <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </Reveal>
        <div className="relative z-10 flex items-end justify-center gap-6 md:justify-between">
          <p className="type-label hidden text-ink/50 md:block">{site.name}</p>
          <p className="type-label hidden text-right text-ink/55 md:block">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}
