import type { MetadataRoute } from "next";
import { SITE_URL, TOP_LANGUAGE_PAIRS } from "@/constants/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const practicePages = TOP_LANGUAGE_PAIRS.map((pair) => ({
    url: `${SITE_URL}/practice/${pair.target}-${pair.native}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...practicePages,
  ];
}
