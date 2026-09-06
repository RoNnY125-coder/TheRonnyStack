"use client";

import Image from "next/image";
import { useLenis } from "lenis/react";
import { nav, site } from "@/content/site";
import { Magnetic } from "@/components/motion/Magnetic";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const lenis = useLenis();

  const onNav = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: `#${string}`,
  ) => {
    event.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, { offset: 0 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.replaceState(null, "", href);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="pad-x flex items-center justify-between pt-5 text-white md:pt-6">
        <Magnetic>
          <a
            href="#hero"
            onClick={(event) => onNav(event, "#hero")}
            className="pointer-events-auto block"
          >
            <Image
              src="/theronnystack-logo.png"
              alt={site.name}
              width={2000}
              height={2000}
              className="h-8 w-8 object-contain md:h-10 md:w-10"
              priority
            />
          </a>
        </Magnetic>

        <nav aria-label="Primary navigation" className="pointer-events-auto">
          <ul className="flex items-center gap-3 md:gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Magnetic>
                  <a
                    href={item.href}
                    onClick={(event) => onNav(event, item.href)}
                    className={cn(
                      "font-mono text-[9px] font-medium tracking-[0.12em] uppercase md:text-[11px] md:tracking-[0.2em]",
                      "text-white/75 transition-opacity duration-200 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
