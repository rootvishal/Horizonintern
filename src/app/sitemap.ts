import { MetadataRoute } from "next";
import { Dirent, readdirSync } from "node:fs";
import { join } from "node:path";

function collectRoutes(dir: string, segments: string[] = []): string[] {
  const entries: Dirent[] = readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (entry.isFile() && entry.name === "page.tsx") {
      const isDynamic = segments.some((segment) => segment.includes("["));
      if (!isDynamic) {
        routes.push(segments.length === 0 ? "/" : `/${segments.join("/")}`);
      }
      continue;
    }

    if (!entry.isDirectory()) {
      continue;
    }

    const folder = entry.name;
    if (folder.startsWith("@") || folder.startsWith("_")) {
      continue;
    }

    // Route groups do not appear in URLs, so recurse without adding the segment.
    const nextSegments =
      folder.startsWith("(") && folder.endsWith(")") ? segments : [...segments, folder];

    routes.push(...collectRoutes(join(dir, folder), nextSegments));
  }

  return routes;
}

function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://horizonintern.in";
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();
  const appDir = join(process.cwd(), "src", "app");
  const routes = Array.from(new Set(collectRoutes(appDir))).sort();

  return routes.map((route) => ({
      url: route === "/" ? baseUrl : `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: route === "/" ? "daily" : "weekly",
      priority: route === "/" ? 1 : 0.8,
    }));
}
