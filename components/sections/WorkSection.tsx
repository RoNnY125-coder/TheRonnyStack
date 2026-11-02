import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/content/projects";

export function WorkSection() {
  return (
    <section id="work" className="bg-paper text-ink">
      <div className="pad-x py-24 md:py-28">
        <div className="hairline" />
        <Reveal>
          <h2 className="type-headline mt-16 max-w-[10ch] font-black uppercase">
            Built around a real problem.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-ink/15">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="project-row grid gap-7 py-9 md:grid-cols-[0.15fr_0.95fr_1fr] md:items-center"
            >
              <p className="type-label text-ink/45">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="type-label mb-4 text-acid">{project.kind}</p>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block transition-colors hover:text-acid"
                  >
                    <h3 className="project-title font-black uppercase">{project.name}</h3>
                  </a>
                ) : (
                  <h3 className="project-title font-black uppercase">{project.name}</h3>
                )}
                <p className="mt-5 max-w-xl text-lg leading-snug text-ink/66">
                  {project.summary}
                </p>
                <dl className="project-details mt-6">
                  <div>
                    <dt>Product</dt>
                    <dd>{project.product}</dd>
                  </div>
                  <div>
                    <dt>Contribution</dt>
                    <dd>{project.contribution}</dd>
                  </div>
                </dl>
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
                    View project ↗
                  </a>
                ) : null}
              </div>
              <div className="project-media overflow-hidden border border-ink/15">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full w-full overflow-hidden"
                    aria-label={`View ${project.name} live project`}
                  >
                    <Image
                      src={project.cover}
                      alt={`${project.name} live website preview`}
                      width={1024}
                      height={576}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      priority
                    />
                  </a>
                ) : (
                  <Image
                    src={project.cover}
                    alt={`${project.name} live website preview`}
                    width={1024}
                    height={576}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
