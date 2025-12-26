'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';
import ThemeSwitch from '@/components/shared/ThemeSwitch';

import { OrbitIcon } from 'lucide-react'; // Using OrbitIcon as placeholder for Logo

import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import { LandingProductDetail } from '@/components/landing/LandingProductDetail';

import GenericHero from './GenericHero';
import GenericIntro from './GenericIntro';
import GenericComparison from './GenericComparison';
import GenericExpertTips from './GenericExpertTips';
import GenericFaq from './GenericFaq';
import GenericCta from './GenericCta';
import GenericSimilarTopics from './GenericSimilarTopics';

import { CatalogItemData } from '../data/types';

const cardGradients = [
  "bg-gradient-to-br from-blue-500 to-blue-200",
  "bg-gradient-to-br from-purple-500 to-purple-200",
  "bg-gradient-to-br from-emerald-500 to-emerald-200",
  "bg-gradient-to-br from-orange-500 to-orange-200",
  "bg-gradient-to-br from-pink-500 to-pink-200",
];

export const ProductPageTemplate = ({ data }: { data: CatalogItemData }) => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);
  const setFonts = useThemeStore((state) => state.setFonts);
  const { setCurrentTheme } = useThemeSwitch();

  useEffect(() => {
    setFonts({
      display: {
        name: 'Oswald',
        variableFont: true,
      },
      default: {
        name: 'Inter',
        variableFont: true,
      },
    });
    setThemeByIndex(10); // Dark theme for stage lighting
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-slate-50 dark:bg-black text-slate-900 dark:text-white">
      <LandingHeader
        fixed
        className="max-w-full"
        logoComponent={
          <div className="flex items-center gap-2">
            <OrbitIcon className="h-8 w-auto text-primary-500" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">LightCatalog</span>
          </div>
        }
      >
        <LandingHeaderMenuItem href="/demo/pageai/lightcatalog" label="Catalog" />
        <LandingHeaderMenuItem href="#products" label="Products" />
        <LandingHeaderMenuItem href="#comparison" label="Comparison" />
        <LandingHeaderMenuItem href="#faq" label="FAQ" />
        <LandingHeaderMenuItem
          href="#contact"
          label="Get Quote"
          type="button"
        />
        <ThemeSwitch />
      </LandingHeader>

      <div className={cn('w-full flex flex-col items-center scroll-smooth')}>
        <GenericHero data={data.hero} />
        <GenericIntro data={data.intro} />
        {data.products.map((product, index) => (
          <LandingProductDetail
            key={index}
            {...product}
            cardBackgroundClassName={cardGradients[index % cardGradients.length]}
          />
        ))}
        <GenericComparison data={data.comparison} />
        <GenericExpertTips data={data.expertTips} />
        <GenericFaq data={data.faq} />
        <GenericCta data={data.cta} />
        <GenericSimilarTopics data={data.similarTopics} />
      </div>
    </div>
  );
};
