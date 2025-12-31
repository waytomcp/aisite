import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pageui.shipixen.com'; // Adjust with actual domain
  
  const dataDir = path.join(process.cwd(), 'app/demo/pageai/lightcatalog/data');
  const languages = ['en', 'zh'];
  const productUrls: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    const langDir = path.join(dataDir, lang);
    if (fs.existsSync(langDir)) {
      const files = fs.readdirSync(langDir);
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.json')) {
          const slug = file.replace(/\.(tsx|json)$/, '');
          productUrls.push({
            url: `${baseUrl}/demo/pageai/lightcatalog/${lang}/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
          });
        }
      }
    }
  }

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

export default generateSitemap;
