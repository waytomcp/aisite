import { Metadata } from 'next';
import { WebsiteBuilder } from './website-builder';

const title = 'PageAI - The Ultimate Website Builder for Entrepreneurs';
const description = 'Build stunning websites in minutes with 80+ pre-built blocks, AI copy generation, and integrated CMS. Lifetime pricing available.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: './',
    siteName: title,
    images: ['/static/images/templatesOgImg.jpg'], // Using a placeholder image
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
    images: ['/static/images/templatesOgImg.jpg'],
  },
};

export default function Demo() {
  return (
    <div className="flex flex-col w-full not-prose">
      <WebsiteBuilder />
    </div>
  );
}
