import { LandingPriceComparisonSection } from '@/components/landing/pricing-comparison/LandingPriceComparisonSection';
import { LandingPriceComparisonItem } from '@/components/landing/pricing-comparison/LandingPriceComparisonItem';
import { CheckIcon } from 'lucide-react';

export default function Comparison() {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Comparison Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Company</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Location</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Services</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Target Audience</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-primary-600">Great K2 Industry Co., Ltd.</td>
                <td className="px-6 py-4 text-gray-700">Shanghai, China</td>
                <td className="px-6 py-4 text-gray-700">Washable self-adhesive clothing label material</td>
                <td className="px-6 py-4 text-gray-700">Clothing Brands, Schools, Healthcare</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Avery Dennison</td>
                <td className="px-6 py-4 text-gray-700">Glendale, CA, USA</td>
                <td className="px-6 py-4 text-gray-700">Pressure-sensitive adhesive materials, RFID</td>
                <td className="px-6 py-4 text-gray-700">Global Apparel Brands</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">CCL Industries</td>
                <td className="px-6 py-4 text-gray-700">Toronto, Canada</td>
                <td className="px-6 py-4 text-gray-700">Specialty packaging, innovative labels</td>
                <td className="px-6 py-4 text-gray-700">Large Scale Manufacturers</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Gildan Activewear</td>
                <td className="px-6 py-4 text-gray-700">Montreal, Canada</td>
                <td className="px-6 py-4 text-gray-700">Branded clothing, blank activewear</td>
                <td className="px-6 py-4 text-gray-700">Wholesale, Screen Printers</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">BestLabels™ USA</td>
                <td className="px-6 py-4 text-gray-700">USA</td>
                <td className="px-6 py-4 text-gray-700">Personalized garment labels</td>
                <td className="px-6 py-4 text-gray-700">Small to Medium Brands</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
