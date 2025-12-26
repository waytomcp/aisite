import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { products } from '../data/products';
import { ProductPageTemplate } from '../components/ProductPageTemplate';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

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

export default function Page({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPageTemplate data={product} />;
}
