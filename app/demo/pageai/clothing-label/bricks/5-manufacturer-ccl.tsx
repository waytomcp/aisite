import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { CheckIcon, XIcon, StarIcon } from 'lucide-react';

export default function CclSection() {
  return (
    <LandingProductFeature
      title="3. CCL Industries"
      description="CCL Industries is recognized as one of the world's largest label makers, offering a diverse range of innovative labeling products for various industries, including apparel."
      imageSrc="https://picsum.photos/id/160/800/600"
      imageAlt="CCL Industries"
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
        <span className="text-sm text-gray-500">4.7/5</span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Pros</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Diverse product portfolio for different applications
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Massive global manufacturing capacity
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Cons</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <XIcon className="w-4 h-4 text-red-500 mt-0.5" />
              Offerings can be less customizable for unique needs
            </li>
          </ul>
        </div>
      </div>
    </LandingProductFeature>
  );
}
