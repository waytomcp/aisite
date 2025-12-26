'use client';

import { cn } from '@/lib/utils';
import { useEffect } from 'react';

import { useThemeStore } from '@/components/bricks/state/theme-state';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';

import Logo from './led-bar-logo.svg';

import { BrickProvider } from '@/components/bricks/brick-provider';
import { Brick } from '@/components/bricks/brick';
import TemplateHeader from '@/app/demo/landing-page-templates/template/template-header';

import Hero from '@/app/demo/pageai/led-bar/bricks/1-hero';
import Intro from '@/app/demo/pageai/led-bar/bricks/2-intro';
import Features from '@/app/demo/pageai/led-bar/bricks/3-features';
import Showcase from '@/app/demo/pageai/led-bar/bricks/4-showcase';
import Specs from '@/app/demo/pageai/led-bar/bricks/5-specs';
import Applications from '@/app/demo/pageai/led-bar/bricks/6-applications';
import Cta from '@/app/demo/pageai/led-bar/bricks/7-cta';

const DEMO_NAME = 'led-bar';

export const LedBar = () => {
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
    setThemeByIndex(10); // Choosing a theme, can adjust
    setCurrentTheme('dark'); // Dark mode for lighting product
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-black text-white">
      <BrickProvider>
        <div className={cn('w-full flex flex-col items-center scroll-smooth')}>
          <TemplateHeader
            className="absolute mb-0 lg:mb-0 pointer-events-none"
            logo={<Logo className="h-8 w-auto text-white" />}
            logoDark={<Logo className="h-8 w-auto text-white" />}
          />

          <Brick demo={DEMO_NAME} brick={'1-hero'} className="first-template-item">
            <Hero />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'2-intro'}>
            <Intro />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'3-features'}>
            <Features />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'4-showcase'}>
            <Showcase />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'5-specs'}>
            <Specs />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'6-applications'}>
            <Applications />
          </Brick>

          <Brick demo={DEMO_NAME} brick={'7-cta'}>
            <Cta />
          </Brick>
        </div>
      </BrickProvider>
    </div>
  );
};
