import type { MetadataRoute } from "next";
import { getUnits } from "@/lib/storeganise";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://darkstarstorage.com";
  const units = await getUnits();

  const unitPages = units
    .filter((u) => u.available)
    .map((u) => ({
      url: `${baseUrl}/rent/${u.id}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...unitPages,
  ];
}
