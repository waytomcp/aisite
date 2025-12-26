import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { CheckIcon, XIcon, StarIcon } from 'lucide-react';

export default function AverySection() {
  return (
    <LandingProductFeature
      title="2. Avery Dennison Corporation"
      description="Avery Dennison is a multinational company specializing in pressure-sensitive adhesive materials, including a comprehensive range of apparel branding labels and tags for global brands."
      imageSrc="https://picsum.photos/id/60/800/600"
      imageAlt="Avery Dennison"
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
          <StarIcon className="w-4 h-4 fill-current" />
        </div>
        <span className="text-sm text-gray-500">4.8/5</span>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Pros</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Comprehensive product range from basic tags to RFID
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
              Strong global presence in over 50 countries
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Cons</h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <XIcon className="w-4 h-4 text-red-500 mt-0.5" />
              Premium products may come at a higher price point
            </li>
          </ul>
        </div>
      </div>
    </LandingProductFeature>
  );
}
