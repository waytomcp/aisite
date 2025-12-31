import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ProductPageTemplate } from '../../components/ProductPageTemplate';
import { CatalogItemData } from '../../data/types';
import fs from 'fs';
import path from 'path';

interface Props {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'app/demo/pageai/lightcatalog/data');
  const languages = ['en', 'zh'];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of languages) {
    const langDir = path.join(dataDir, lang);
    if (fs.existsSync(langDir)) {
      const files = fs.readdirSync(langDir);
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.json')) {
          const slug = file.replace(/\.(tsx|json)$/, '');
          params.push({ lang, slug });
        }
      }
    }
  }

  return params;
}

async function getProduct(lang: string, slug: string): Promise<CatalogItemData | null> {
  try {
    // Dynamic import based on language and slug
    // We use dynamic import to load the specific configuration file
    const productModule = await import(`../../data/${lang}/${slug}`);
    return productModule.default;
  } catch (e) {
    console.error(`Failed to load product ${lang}/${slug}:`, e);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.lang, params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
  };
}

export default async function Page({ params }: Props) {
  const product = await getProduct(params.lang, params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPageTemplate data={product} />;
}
