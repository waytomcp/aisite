import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { Button } from '@/components/shared/ui/button';
import { CheckIcon, XIcon, StarIcon } from 'lucide-react';

export default function K2Section() {
  return (
    <LandingProductFeature
      title="1. Great K2 Industry Co., Ltd."
      description="Great K2 Industry Co., Ltd. is a leading manufacturer and exporter of high-quality clothes sticker film products and one of the best clothing label material manufacturers, specializing in washable, self-adhesive name tag materials ideal for children's items, schools, and nursing homes."
      imageSrc="https://picsum.photos/id/20/800/600"
      imageAlt="Great K2 Label Materials"
      imagePosition="right"
      zoomOnHover
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="font-semibold">Rating:</span>
        <div className="flex text-yellow-400">
          <StarIcon className="w-4 h-4 fill-current" />
          <StarIcon className="w-4 h-4 fill-current" />
          <StarIcon className="w-4 h-4 fill-current" />
          <StarIcon className="w-4 h-4 fill-current" />
          <StarIcon className="w-4 h-4 fill-current" />
        </div>
        <span className="text-sm text-gray-500">4.9/5</span>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold mb-2">Pros</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Ultra-high adhesion with 30+ wash cycles durability
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Compatible with solvent, ECO, UV, and Latex inks
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Multiple environmental certifications
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Cons</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <XIcon className="w-4 h-4 text-red-500 mt-0.5" />
              Primarily serves developed countries worldwide
            </li>
          </ul>
        </div>
      </div>

      <Button asChild className="w-full sm:w-auto">
        <a href="https://www.clothesstickers.com/" target="_blank" rel="noopener noreferrer">Learn More about K2</a>
      </Button>
    </LandingProductFeature>
  );
}
