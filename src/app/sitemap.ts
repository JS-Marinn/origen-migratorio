import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: SITE_URL, lastModified: now, priority: 1.0 },
    {
      url: `${SITE_URL}/hablamos-espanol`,
      lastModified: now,
      priority: 0.9,
    },
    { url: `${SITE_URL}/servicios`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/contacto`, lastModified: now, priority: 0.8 },
  ];

  const servicioPages = services.map((s) => ({
    url: `${SITE_URL}/servicios/${s.slug}`,
    lastModified: now,
    priority: 0.7 as const,
  }));

  const hablamosPages = services.map((s) => ({
    url: `${SITE_URL}/hablamos-espanol/${s.slug}`,
    lastModified: now,
    priority: 0.7 as const,
  }));

  return [...staticPages, ...servicioPages, ...hablamosPages];
}
