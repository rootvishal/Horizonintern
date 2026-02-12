import { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";

function getInternshipSlugs() {
  const internshipsDir = join(process.cwd(), "src", "app", "internships");
  return readdirSync(internshipsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://horizonintern.in";
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();
  const internshipSlugs = getInternshipSlugs();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...internshipSlugs.map((slug) => ({
      url: `${baseUrl}/internships/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
