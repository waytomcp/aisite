import { Metadata } from 'next';
import { PixelLedBarPage } from './pixel-led-bar';

const title = 'The Best LED Bar with Pixel Control – 16 Zones | Professional Lighting Guide';
const description = 'Deliver dynamic visuals and precise pixel mapping with 16-zone pixel-controlled LED bars. A guide for lighting designers and production teams.';

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
    type: 'article',
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
      <PixelLedBarPage />
    </div>
  );
}
