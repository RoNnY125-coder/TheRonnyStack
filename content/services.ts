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
    id: "growth",
    name: "Growth",
    items: [
      "SEO",
      "Local SEO",
      "Conversion optimization",
      "Analytics",
      "Search & social presence",
    ],
  },
  {
    id: "creative",
    name: "Creative",
    items: [
      "UI/UX",
      "Brand identity",
      "Design systems",
      "Digital creatives",
      "Visual direction",
    ],
  },
  {
    id: "systems",
    name: "AI & Systems",
    items: [
      "AI integrations",
      "Automation",
      "Business workflows",
      "Internal tools",
      "Custom digital systems",
    ],
  },
];
