import { Metadata } from 'next';
import { LedBar } from './led-bar';

const title = 'The Best LED Bar with Pixel Control | Ultimate Guide';
const description = 'Discover the ultimate LED Bar with 16 zones of pixel control, motorized zoom, and IP65 rating. Perfect for festivals, touring, and broadcast.';

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
    images: ['/static/images/templatesOgImg.jpg'],
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
      <LedBar />
    </div>
  );
}
