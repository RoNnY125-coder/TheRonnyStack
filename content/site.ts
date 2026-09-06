import type { NavItem, SiteSection } from "./types";

export const site = {
  name: "TheRonnyStack",
  shortName: "The Ronny Stack",
  url: "https://theronnystack.com",
  founder: "Raunak Sharma",
  tagline: "Presence, built in layers.",
  description:
    "TheRonnyStack is a young digital studio building websites, design, and growth systems for businesses that want a coherent presence — not another template.",
  email: "theronnystack@gmail.com",
  socials: {
    instagram:
      "https://www.instagram.com/theronnystack?stkn=MWtqMXJvYnNybXBreg==",
    linkedin: "https://www.linkedin.com/in/raunak-sharma-b91650344/",
  },
  phrase: "Still stacking.",
  manifesto: [
    "The internet is the first handshake.",
    "Search, maps, social, the site — they are not separate.",
    "We make them one presence.",
  ],
  about: {
    lines: [
      "I'm still learning.",
      "I'm still figuring things out.",
      "I'm building anyway.",
    ],
    body: "I'm Raunak Sharma — a 2nd-year student, designer, and developer. TheRonnyStack is small on purpose: a studio that will grow as I do, through business, design, code, SEO, marketing, sales, automation, AI, and strategy.",
  },
  vision: {
    kicker: "This is only V1.",
    stages: [
      { when: "Today", what: "Web + Design" },
      { when: "Tomorrow", what: "SEO + Growth" },
      { when: "Next", what: "Automation + AI" },
      { when: "Eventually", what: "Whatever the business needs" },
    ],
  },
  contact: {
    line: "Got a business worth building?",
    cta: "Let's talk",
  },
} as const;

export const nav: NavItem[] = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const sections: SiteSection[] = [
  { id: "hero", index: "01", name: "Hero", field: "ink" },
  { id: "manifesto", index: "02", name: "Manifesto", field: "paper" },
  { id: "stack", index: "03", name: "The Stack", field: "ink" },
  { id: "work", index: "04", name: "Selected Work", field: "paper" },
  { id: "services", index: "05", name: "Services", field: "ink" },
  { id: "process", index: "06", name: "Process", field: "paper" },
  { id: "about", index: "07", name: "About", field: "ink" },
  { id: "vision", index: "08", name: "Vision", field: "paper" },
  { id: "contact", index: "09", name: "Contact", field: "ink" },
];
