import { MetadataRoute } from "next";

function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
