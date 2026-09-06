import type { ServiceGroup } from "./types";

export const serviceGroups: ServiceGroup[] = [
  {
    id: "web",
    name: "Web",
    items: [
      "Premium websites",
      "Landing pages",
      "Performance & accessibility",
      "CMS-ready builds",
    ],
  },
  {
    id: "design",
    name: "Design",
    items: ["UI/UX", "Brand identity", "Design systems", "Editorial layouts"],
  },
  {
    id: "growth",
    name: "Growth",
    items: [
      "SEO & local SEO",
      "Conversion optimization",
      "Analytics setup",
      "Search & social presence",
    ],
  },
  {
    id: "systems",
    name: "Systems",
    items: [
      "Automation",
      "AI integrations",
      "Ops tooling",
      "Whatever the business actually needs next",
    ],
  },
];
