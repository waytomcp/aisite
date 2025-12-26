import { MetadataRoute } from 'next';
import { allBlogs } from 'shipixen-contentlayer/generated';
import { siteConfig } from '@/data/config/site.settings';
import { generateSitemap as generateLightCatalogSitemap } from './demo/pageai/lightcatalog/sitemap';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteConfig.siteUrl;
  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }));

  const routes = ['', 'overview', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const lightCatalogRoutes = await generateLightCatalogSitemap();

  return [...routes, ...blogRoutes, ...lightCatalogRoutes];
}
