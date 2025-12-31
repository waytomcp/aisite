import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { CatalogItemData } from '../data/types';
import clsx from 'clsx';

export default function GenericExpertTips({ data }: { data: CatalogItemData['expertTips'] }) {
  return (
    <section className="w-full py-8 lg:py-10 px-6 flex justify-center bg-secondary-100/20 dark:bg-secondary-900/10">
      <div className="w-full p-6 container-wide">
        
        {/* Header: Title & Description */}
        <div className="w-full max-w-4xl flex flex-col gap-6 text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
              {data.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {data.description}
            </p>
          </div>
        </div>
        {/* Key Points - Below Description */}
        <div className="w-full">
           <LandingProductFeatureKeyPoints
            keyPoints={data.tips}
            variant="secondary"
            descriptionStyle="block"
          />
        </div>
      </div>
    </section>
  );
}
