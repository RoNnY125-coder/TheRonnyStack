import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "overclock",
    name: "Overclock",
    kind: "Concept",
    product: "A gaming performance homepage.",
    contribution: "Web design, visual direction, and interaction design.",
    summary:
      "A high-intensity landing page that makes speed, contrast, and a sharp first impression feel like part of the product.",
    services: ["Web", "Creative", "Experience"],
    cover: "/projects/overclock-home.png",
    href: "https://overclock-9.vercel.app/",
  },
  {
    slug: "stack-audit",
    name: "Stack Audit",
    kind: "Internal",
    product: "A technical audit tool concept.",
    contribution: "Product thinking, UX design, and system design.",
    summary:
      "A focused interface that turns technical review into an understandable product story for teams who need a clearer next step.",
    services: ["Web", "UX", "Systems"],
    cover: "/projects/stack-audit-home.png",
    href: "https://stack-audit-ashy.vercel.app/",
  },
];
