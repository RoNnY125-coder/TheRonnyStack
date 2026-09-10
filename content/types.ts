export type NavItem = {
  href: `#${string}`;
  label: string;
};

export type Field = "ink" | "paper";

export type SiteSection = {
  id: string;
  index: string;
  name: string;
  field: Field;
};

export type StackLayer = {
  id: string;
  index: string;
  name: string;
  payoff: string;
};

export type ProjectKind = "Concept" | "Internal";

export type Project = {
  slug: string;
  name: string;
  kind: ProjectKind;
  product: string;
  contribution: string;
  summary: string;
  services: string[];
  cover: string;
  href?: string;
};

export type ServiceGroup = {
  id: string;
  name: string;
  items: string[];
};

export type ProcessStep = {
  id: string;
  name: string;
  line: string;
};
