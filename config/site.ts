export const siteConfig = {
  name: "مناحل مكيراس",
  url: "https://example.com",
  ogImage: "/og.jpg",
  description:
    "مناحل مكيراس — عسل فاخر مُنتقى بعناية بتجربة عربية راقية.",
  version: "v1.0",
  getStartedUrl: "/",
  pricing: {
    pro: "/",
    team: "/",
  },
  links: {
    email: "mailto:contact@example.com",
    github: "https://github.com",
  },
  stats: {
    updated: "2026",
    templates: "1",
    sections: "9",
    illustrations: "4",
    animations: "4",
    /** Numeric placeholders for legacy section components */
    figma: 12_000,
    github: 2_100,
    cli: 8_500,
  },
};

export type SiteConfig = typeof siteConfig;
