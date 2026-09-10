import { Magnetic } from "@/components/motion/Magnetic";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="pad-x flex min-h-svh flex-col justify-between py-24 md:py-28">
        <div>
          <div className="hairline" />
          <div className="section-topline">
            <p className="type-label text-paper/55">09 Contact</p>
            <p className="type-label text-paper/35">Start a conversation</p>
          </div>
        </div>
        <div>
          <p className="type-label mb-8 text-acid">{site.contact.line}</p>
          <h2 className="contact-title font-black uppercase">
            Let&apos;s build your next layer.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-snug text-paper/62 md:text-xl">
            Tell us about a new website, SEO or growth work, design, AI automation, or a
            complete digital presence.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="hero-actions">
            <Magnetic>
              <a
                className="button-primary button-primary--light"
                href={`mailto:${site.email}?subject=Project%20enquiry%20for%20TheRonnyStack`}
              >
                {site.contact.cta} <span aria-hidden>↗</span>
              </a>
            </Magnetic>
            <a className="button-secondary button-secondary--light" href={`mailto:${site.email}`}>
              Get in touch <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[11px] tracking-[0.2em] uppercase text-paper/55">
            <a className="hover:text-acid" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="hover:text-acid" href={site.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:text-acid" href={site.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
