import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "overclock",
    name: "Overclock",
    industry: "Gaming / Performance",
    year: "2026",
    status: "live",
    summary:
      "A high-intensity homepage built around speed, contrast, and a sharp first impression.",
    services: ["Web", "Design", "Experience"],
    cover: "/projects/overclock-home.png",
    href: "https://overclock-9.vercel.app/",
  },
  {
    slug: "stack-audit",
    name: "Stack Audit",
    industry: "SaaS / Audit Tool",
    year: "2026",
    status: "live",
    summary:
      "A focused audit interface that turns technical review into a clean product story.",
    services: ["Web", "UX", "Systems"],
    cover: "/projects/stack-audit-home.png",
    href: "https://stack-audit-ashy.vercel.app/",
  },
];
