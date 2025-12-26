import { Metadata } from 'next';
import { products } from './data/products';

export default function sitemap(): Metadata {
  const baseUrl = 'https://pageui.shipixen.com'; // Adjust with actual domain

  return {
    alternates: {
      canonical: `${baseUrl}/demo/pageai/lightcatalog`,
    },
    openGraph: {
      url: `${baseUrl}/demo/pageai/lightcatalog`,
    },
  };
}

export async function generateSitemap() {
  const baseUrl = 'https://pageui.shipixen.com'; // Adjust with actual domain

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/demo/pageai/lightcatalog/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/demo/pageai/lightcatalog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...productUrls,
  ];
}
