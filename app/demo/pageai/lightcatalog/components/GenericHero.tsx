import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { Button } from '@/components/shared/ui/button';
import { LandingAvatar } from '@/components/landing/social-proof/LandingAvatar';
import { CatalogItemData } from '../data/types';

export default function GenericHero({ data }: { data: CatalogItemData['hero'] }) {
  return (
    <LandingPrimaryTextCtaSection
      titleComponent={
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-6">
          {data.title}
        </h1>
      }
      descriptionComponent={
        <div 
          className="text-lg md:text-xl text-center text-slate-500 dark:text-gray-300 max-w-4xl mx-auto mb-8"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      }
      withBackgroundGlow
      variant="primary"
      textPosition="center"
      innerClassName="!max-w-6xl"
    >
      <div className="flex w-full items-center justify-between gap-8 mt-8 px-4 md:px-12">
        <div className="flex-1 text-left">
          <Button size="xl" className="w-full md:w-auto md:min-w-[200px]" asChild>
            <a href={data.buttonLink}>{data.buttonText}</a>
          </Button>
        </div>

        <div className="flex items-center justify-end gap-4 flex-1">
          <LandingAvatar
            imageSrc={data.avatarImage}
            name={data.avatarName}
            size="medium"
          />
          <div className="text-left">
            <p className="text-sm text-slate-500 dark:text-gray-500">{data.reportText}</p>
            <p className="font-semibold">{data.avatarName}</p>
          </div>
        </div>
      </div>
    </LandingPrimaryTextCtaSection>
  );
}
