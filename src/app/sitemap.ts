import type { MetadataRoute } from 'next';

const SITE_URL = 'https://carelmaeda.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/case-studies/bonus-bowls`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
