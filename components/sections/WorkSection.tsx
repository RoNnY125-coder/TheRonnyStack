import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects";

export function WorkSection() {
  return (
    <section id="work" className="bg-paper text-ink">
      <div className="pad-x py-24 md:py-28">
        <div className="hairline" />
        <div className="section-topline">
          <p className="type-label text-ink/55">04 Selected Work</p>
          <p className="type-label text-ink/35">Live homepages</p>
        </div>
        <Reveal>
          <h2 className="type-headline mt-16 max-w-[9ch] font-black uppercase">
            Selected builds.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-ink/15">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="project-row grid gap-7 py-9 md:grid-cols-[0.18fr_0.92fr_1fr] md:items-center"
            >
              <p className="type-label text-ink/45">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="type-label mb-4 text-ink/45">
                  {project.industry} / {project.year} / {project.status}
                </p>
                <h3 className="project-title font-black uppercase">
                  {project.name}
                </h3>
                <p className="mt-5 max-w-xl text-lg leading-snug text-ink/66">
                  {project.summary}
                </p>
                <p className="type-label mt-6 text-ink/45">
                  {project.services.join(" · ")}
                </p>
                {project.href ? (
                  <a
                    className="type-label mt-6 inline-flex border-b border-ink/30 pb-1 text-ink transition-colors hover:border-acid hover:text-acid"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit site ↗
                  </a>
                ) : null}
              </div>
              <div className="project-media">
                <Image
                  src={project.cover}
                  alt={`${project.name} concept visual`}
                  width={720}
                  height={430}
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
