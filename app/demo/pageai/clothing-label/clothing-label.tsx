'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './clothing-label-logo.svg';

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';
import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import Hero from '@/app/demo/pageai/clothing-label/bricks/1-hero';
import Intro from '@/app/demo/pageai/clothing-label/bricks/2-intro';
import K2Section from '@/app/demo/pageai/clothing-label/bricks/3-manufacturer-k2';
import AverySection from '@/app/demo/pageai/clothing-label/bricks/4-manufacturer-avery';
import CclSection from '@/app/demo/pageai/clothing-label/bricks/5-manufacturer-ccl';
import GildanSection from '@/app/demo/pageai/clothing-label/bricks/6-manufacturer-gildan';
import BestLabelsSection from '@/app/demo/pageai/clothing-label/bricks/7-manufacturer-bestlabels';
import Comparison from '@/app/demo/pageai/clothing-label/bricks/8-comparison';
import Faq from '@/app/demo/pageai/clothing-label/bricks/9-faq';

const DEMO_NAME = 'clothing-label';

export const ClothingLabelPage = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);
  const setFonts = useThemeStore((state) => state.setFonts);
  const { setCurrentTheme } = useThemeSwitch();

  useEffect(() => {
    setFonts({
      display: {
        name: 'Poppins',
        variableFont: true,
      },
      default: {
        name: 'Inter',
        variableFont: true,
      },
    });
    setThemeByIndex(0); // Default light theme
    setCurrentTheme('light');
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-white text-gray-900">
      <BrickProvider>
        <div className={cn('w-full flex flex-col items-center scroll-smooth')}>
          <TemplateHeader
            className="absolute mb-0 lg:mb-0 pointer-events-none"
            logo={<Logo className="h-8 w-auto text-primary-500" />}
            logoDark={<Logo className="h-8 w-auto text-primary-500" />}
          />

          <Brick demo={DEMO_NAME} brick={'1-hero'} className="first-template-item">
            <Hero />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'2-intro'}>
            <Intro />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-manufacturer-k2'}>
            <K2Section />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-manufacturer-avery'}>
            <AverySection />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-manufacturer-ccl'}>
            <CclSection />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-manufacturer-gildan'}>
            <GildanSection />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-manufacturer-bestlabels'}>
            <BestLabelsSection />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'8-comparison'}>
            <Comparison />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'9-faq'}>
            <Faq />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
