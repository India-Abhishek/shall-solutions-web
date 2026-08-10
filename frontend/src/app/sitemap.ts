import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shallsolutions.in",

      lastModified: new Date(),

      priority: 1,
    },
  ];
}