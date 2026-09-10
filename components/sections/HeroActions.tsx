import { Reveal } from "@/components/motion/Reveal";

export function HeroActions() {
  return (
    <section className="hero-action-band bg-paper text-ink" aria-label="Next steps">
      <div className="pad-x">
        <Reveal className="hero-actions justify-center">
          <a className="button-primary" href="#contact">
            Start a project <span aria-hidden>↗</span>
          </a>
          <a className="button-secondary" href="#work">
            View our work <span aria-hidden>↓</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}