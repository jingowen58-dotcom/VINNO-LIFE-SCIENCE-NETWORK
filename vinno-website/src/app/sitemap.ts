import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/en",
    "/zh",
    "/en/science",
    "/zh/science",
    "/en/science/technology",
    "/zh/science/technology",
    "/en/science/progress",
    "/zh/science/progress",
    "/en/health",
    "/zh/health",
    "/en/health/assessment",
    "/zh/health/assessment",
    "/en/products",
    "/zh/products",
    "/en/products/senior-probiotic",
    "/zh/products/senior-probiotic",
    "/en/products/joint-support",
    "/zh/products/joint-support",
    "/en/products/complete-nutrition",
    "/zh/products/complete-nutrition",
    "/en/about",
    "/zh/about",
    "/en/privacy",
    "/zh/privacy",
    "/en/terms",
    "/zh/terms",
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path}/`,
    lastModified: new Date("2026-10-31"),
  }));
}
