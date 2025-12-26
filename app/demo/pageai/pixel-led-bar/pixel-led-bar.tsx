'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './pixel-led-bar-logo.svg';

import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';

import Hero from '@/app/demo/pageai/pixel-led-bar/bricks/1-hero';
import Intro from '@/app/demo/pageai/pixel-led-bar/bricks/2-intro';
import Comparison from '@/app/demo/pageai/pixel-led-bar/bricks/8-comparison';
import ExpertTips from '@/app/demo/pageai/pixel-led-bar/bricks/9-expert-tips';
import Faq from '@/app/demo/pageai/pixel-led-bar/bricks/10-faq';
import Cta from '@/app/demo/pageai/pixel-led-bar/bricks/11-cta';
import SimilarTopics from '@/app/demo/pageai/pixel-led-bar/bricks/12-similar-topics';
import { LandingProductDetail } from '@/components/landing/LandingProductDetail';
import { productsData } from '@/app/demo/pageai/pixel-led-bar/bricks/products-data';

const DEMO_NAME = 'pixel-led-bar';

const cardGradients = [
  "bg-gradient-to-br from-blue-500 to-blue-200",
  "bg-gradient-to-br from-purple-500 to-purple-200",
  "bg-gradient-to-br from-emerald-500 to-emerald-200",
  "bg-gradient-to-br from-orange-500 to-orange-200",
  "bg-gradient-to-br from-pink-500 to-pink-200",
];

export const PixelLedBarPage = () => {
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
    setCurrentTheme('dark');
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-black text-white">
      <LandingHeader
        fixed
        logoComponent={
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-auto text-primary-500" />
            <span className="text-xl font-bold text-white">PixelBar</span>
          </div>
        }
      >
        <LandingHeaderMenuItem href="#" label="Home" />
        <LandingHeaderMenuItem href="#products" label="Products" />
        <LandingHeaderMenuItem href="#comparison" label="Comparison" />
        <LandingHeaderMenuItem href="#faq" label="FAQ" />
        <LandingHeaderMenuItem
          href="#contact"
          label="Get Quote"
          type="button"
        />
      </LandingHeader>

      <div className={cn('w-full flex flex-col items-center scroll-smooth')}>
        <Hero />
        <Intro />
        {productsData.map((product, index) => (
          <LandingProductDetail
            key={index}
            {...product}
            cardBackgroundClassName={cardGradients[index % cardGradients.length]}
          />
        ))}
        <Comparison />
        <ExpertTips />
        <Faq />
        <Cta />
        <SimilarTopics />
      </div>
    </div>
  );
};
