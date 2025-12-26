import { MetadataRoute } from 'next';
import { products } from './data/products';

export async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pageui.shipixen.com'; // Adjust with actual domain

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/demo/pageai/lightcatalog/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/demo/pageai/lightcatalog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...productUrls,
  ];
}

export default generateSitemap;
