import { MetadataRoute } from 'next';
import { EXPERTISES } from '@/lib/data/expertises';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ceiue.org';

  const staticRoutes = [
    '',
    '/le-ceiue',
    '/expertises',
    '/methode',
    '/ressources',
    '/contact',
    '/mentions-legales',
    '/politique-confidentialite',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const expertiseRoutes = EXPERTISES.map((exp) => ({
    url: `${baseUrl}/expertises/${exp.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...expertiseRoutes];
}
