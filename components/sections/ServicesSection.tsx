import { Reveal } from "@/components/motion/Reveal";
import { serviceGroups } from "@/content/services";

export function ServicesSection() {
  return (
    <section id="services" className="bg-ink text-paper">
      <div className="pad-x py-24 md:py-28">
        <div className="hairline" />
        <Reveal>
          <h2 className="type-headline mt-16 max-w-[12ch] font-black uppercase">
            What we can build together.
          </h2>
        </Reveal>
        <div className="mt-14 divide-y divide-paper/15">
          {serviceGroups.map((group) => (
            <article key={group.id} className="service-row">
              <h3 className="service-name font-black uppercase">{group.name}</h3>
              <ul className="service-items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
