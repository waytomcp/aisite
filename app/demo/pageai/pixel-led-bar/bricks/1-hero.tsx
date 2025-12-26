import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { Button } from '@/components/shared/ui/button';
import { LandingAvatar } from '@/components/landing/social-proof/LandingAvatar';

export default function Hero() {
  return (
    <LandingPrimaryTextCtaSection
      titleComponent={
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-6">
          The Best LED Bar with Pixel Control – 16 Zones
        </h1>
      }
      descriptionComponent={
        <p className="text-lg md:text-xl text-center text-gray-300 max-w-4xl mx-auto mb-8">
          Deliver dynamic visuals, precise pixel mapping, and professional-grade performance with 16-zone pixel-controlled LED bars. This guide helps lighting designers, production teams, and rental companies choose the right fixture for their next project.
        </p>
      }
      withBackgroundGlow
      variant="primary"
      textPosition="center"
      innerClassName="!max-w-6xl"
    >
      <div className="flex w-full items-center justify-between gap-8 mt-8 px-4 md:px-12">
        <div className="flex-1 text-left">
          <Button size="xl" className="w-full md:w-auto md:min-w-[200px]" asChild>
            <a href="#comparison">Compare LED Bars</a>
          </Button>
        </div>

        <div className="flex items-center justify-end gap-4 flex-1">
          <LandingAvatar
            imageSrc="https://picsum.photos/id/1005/100/100"
            name="Great K2 Team"
            size="medium"
          />
          <div className="text-left">
            <p className="text-sm text-gray-500">Industry Report by</p>
            <p className="font-semibold">Great K2 Team</p>
          </div>
        </div>
      </div>
    </LandingPrimaryTextCtaSection>
  );
}
