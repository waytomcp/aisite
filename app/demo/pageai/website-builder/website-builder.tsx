'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './website-builder-logo.svg';

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';
import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import Hero from '@/app/demo/pageai/website-builder/bricks/1-hero';
import FeaturesList from '@/app/demo/pageai/website-builder/bricks/2-features-list';
import CmsFeature from '@/app/demo/pageai/website-builder/bricks/3-cms-feature';
import HostingFeature from '@/app/demo/pageai/website-builder/bricks/4-hosting-feature';
import AgencyFeature from '@/app/demo/pageai/website-builder/bricks/5-agency-feature';
import Pricing from '@/app/demo/pageai/website-builder/bricks/6-pricing';
import Testimonials from '@/app/demo/pageai/website-builder/bricks/7-testimonials';
import Faq from '@/app/demo/pageai/website-builder/bricks/8-faq';
import Cta from '@/app/demo/pageai/website-builder/bricks/9-cta';

const DEMO_NAME = 'website-builder';

export const WebsiteBuilder = () => {
  const setThemeByIndex = useThemeStore((state) => state.setThemeByIndex);
  const setFonts = useThemeStore((state) => state.setFonts);
  const { setCurrentTheme } = useThemeSwitch();

  useEffect(() => {
    setFonts({
      display: {
        name: 'Inter',
        variableFont: true,
      },
      default: {
        name: 'Inter',
        variableFont: true,
      },
    });
    setThemeByIndex(10); // Choosing a theme index, maybe adjust later for "Bright" style
    setCurrentTheme('light');
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <BrickProvider>
        <div className={cn('w-full flex flex-col items-center scroll-smooth')}>
          <TemplateHeader
            className="absolute mb-0 lg:mb-0 pointer-events-none"
            logo={<Logo className="h-8 w-auto text-primary" />}
            logoDark={<Logo className="h-8 w-auto text-primary" />}
          />

          <Brick demo={DEMO_NAME} brick={'1-hero'} className="first-template-item">
            <Hero />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'2-features-list'}>
            <FeaturesList />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-cms-feature'}>
            <CmsFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-hosting-feature'}>
            <HostingFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-agency-feature'}>
            <AgencyFeature />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-pricing'}>
            <Pricing />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-testimonials'}>
            <Testimonials />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'8-faq'}>
            <Faq />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'9-cta'}>
            <Cta />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
