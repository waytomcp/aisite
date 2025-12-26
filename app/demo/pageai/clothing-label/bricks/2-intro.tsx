import { LandingFeature } from '@/components/landing/feature/LandingFeature';
import { InfoIcon } from 'lucide-react';

export default function Intro() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <InfoIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">What Is a Clothing Label Material Manufacturer?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A clothing label material manufacturer specializes in producing the raw, printable, and self-adhesive materials used to create labels for garments and textiles. These manufacturers create durable material solutions that withstand repeated washing and drying cycles while maintaining adhesion and print quality. They offer customizable products compatible with various printing technologies and serve diverse markets including children's clothing, nursing homes, schools, and commercial apparel brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
