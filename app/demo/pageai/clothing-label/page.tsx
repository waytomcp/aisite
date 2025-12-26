import { Metadata } from 'next';
import { ClothingLabelPage } from './clothing-label';

const title = 'The Best Clothing Label Material Manufacturer | Ultimate Guide';
const description = 'Ultimate Guide – The Best Clothing Label Material Manufacturer: 1. Great K2 Industry Co., Ltd.; 2. Avery Dennison Corporation; 3. CCL Industries; 4. Gildan Activewear Inc.; 5. BestLabels™ USA.';

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
      <ClothingLabelPage />
    </div>
  );
}
