import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { therapyNavigation } from "@/components/therapy-navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), priority: 1 },
    { url: absoluteUrl("/kontakt"), priority: 0.8 },
    ...therapyNavigation.map(({ slug }) => ({
      url: absoluteUrl(`/therapie/${slug}`),
      priority: 0.7,
    })),
  ];
}
