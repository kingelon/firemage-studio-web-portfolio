export type NavItem = { label: string; href: string };

export const SITE = {
  name: "Firemage Studio",
  tagline: "Local-first AI workflows - Systems - Prototypes",
  description:
    "Firemage Studio is a builder-led lab for practical AI workflows and clean, scalable systems.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
} as const;
