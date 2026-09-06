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
      <div className="pad-x grid min-h-svh grid-rows-[auto_1fr_auto] pt-20 pb-7 text-center md:pt-22">
        <div className="hero-hairline hairline" />
        <Reveal className="relative z-10 mx-auto self-center">
          <HeroTitle />
          <p className="hero-subtitle mx-auto mt-7 max-w-[45rem] leading-tight text-ink/68">
            websites, design, and growth layers for businesses ready to be seen.
          </p>
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
