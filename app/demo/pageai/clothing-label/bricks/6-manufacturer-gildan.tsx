import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { CheckIcon, XIcon, StarIcon } from 'lucide-react';

export default function GildanSection() {
  return (
    <LandingProductFeature
      title="4. Gildan Activewear Inc."
      description="Gildan is a leading manufacturer of quality branded clothing, including undecorated blank activewear that serves as a high-quality base for custom labeling and branding."
      imageSrc="https://picsum.photos/id/175/800/600"
      imageAlt="Gildan Activewear"
      imagePosition="left"
      zoomOnHover
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="font-semibold">Rating:</span>
        <div className="flex text-yellow-400">
          <StarIcon className="w-4 h-4 fill-current" />
          <StarIcon className="w-4 h-4 fill-current" />
          <StarIcon className="w-4 h-4 fill-current" />
          <StarIcon className="w-4 h-4 fill-current" />
          <StarIcon className="w-4 h-4 text-gray-300" />
        </div>
        <span className="text-sm text-gray-500">4.6/5</span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Pros</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Provides high-quality and durable base garments
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Engages in environmentally friendly manufacturing
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Cons</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <XIcon className="w-4 h-4 text-red-500 mt-0.5" />
              Focuses on garment production, not custom label materials
            </li>
          </ul>
        </div>
      </div>
    </LandingProductFeature>
  );
}
