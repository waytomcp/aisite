import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { CheckIcon, XIcon, StarIcon } from 'lucide-react';

export default function BestLabelsSection() {
  return (
    <LandingProductFeature
      title="5. BestLabels™ USA"
      description="BestLabels™ USA specializes in personalized garment labels, offering a wide range of custom options including printed fabric and woven labels for brands of all sizes."
      imageSrc="https://picsum.photos/id/250/800/600"
      imageAlt="BestLabels USA"
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
              Wide range of customizable options for brand identity
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Low minimum order quantities are ideal for smaller brands
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Cons</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <XIcon className="w-4 h-4 text-red-500 mt-0.5" />
              Fewer material choices compared to larger manufacturers
            </li>
          </ul>
        </div>
      </div>
    </LandingProductFeature>
  );
}
