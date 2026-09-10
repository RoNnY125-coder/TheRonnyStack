import type { NavItem, SiteSection } from "./types";

export const site = {
  name: "TheRonnyStack",
  shortName: "The Ronny Stack",
  url: "https://theronnystack.com",
  founder: "Raunak Sharma",
  tagline: "Presence, built in layers.",
  description:
    "TheRonnyStack is a digital studio for small businesses and early-stage teams building websites, design systems, search visibility, and practical digital growth.",
  email: "theronnystack@gmail.com",
  socials: {
    instagram:
      "https://www.instagram.com/theronnystack?stkn=MWtqMXJvYnNybXBreg==",
    linkedin: "https://www.linkedin.com/in/raunak-sharma-b91650344/",
  },
  phrase: "Presence, built in layers.",
  manifesto: [
    "Your website is not your whole presence.",
    "Neither is search. Neither is social.",
    "People experience it all as one business.",
    "We build the layers together.",
  ],
  about: {
    lines: ["Intentionally small.", "Serious by design."],
    body: "TheRonnyStack started with one developer, a lot of curiosity, and a simple belief: businesses deserve digital experiences that are actually thought through. We work across design, development, SEO, growth, and emerging AI systems, learning by building and improving with every project.",
    founderLine:
      "Raunak Sharma — Founder / Developer. A 2nd-year Computer Science student building TheRonnyStack alongside college.",
  },
  capabilities: [
    { name: "Web", line: "Fast, considered websites and landing pages." },
    { name: "Design", line: "Clear visual systems and useful experiences." },
    { name: "Growth", line: "Discovery, conversion, and visibility layers." },
    { name: "AI & Systems", line: "Practical automation and custom workflows." },
  ],
  contact: {
    line: "Have a business worth building?",
    cta: "Start a project",
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
  { id: "capabilities", index: "08", name: "Capabilities", field: "paper" },
  { id: "contact", index: "09", name: "Contact", field: "ink" },
];
