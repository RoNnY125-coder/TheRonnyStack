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
            Let&apos;s make the internet notice.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Magnetic>
              <a
                className="inline-flex border-b border-paper pb-2 text-2xl font-black uppercase transition-colors hover:border-acid hover:text-acid md:text-5xl"
                href={`mailto:${site.email}`}
              >
                {site.contact.cta} ↗
              </a>
            </Magnetic>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[11px] tracking-[0.2em] uppercase text-paper/55">
            <a className="hover:text-acid" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="hover:text-acid" href={site.socials.instagram}>
              Instagram
            </a>
            <a className="hover:text-acid" href={site.socials.linkedin}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
