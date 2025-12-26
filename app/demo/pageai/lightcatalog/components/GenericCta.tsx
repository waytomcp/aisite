import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { Button } from '@/components/shared/ui/button';
import { CatalogItemData } from '../data/types';

export default function GenericCta({ data }: { data: CatalogItemData['cta'] }) {
  return (
    <LandingSaleCtaSection
      title={data.title}
      description={data.description}
      withBackground
      variant="primary"
      innerContainerClassName="container-wide"
    >
      <div className="flex gap-4 justify-center mt-6">
        {data.buttons.map((btn, idx) => (
          <Button key={idx} size="xl" variant={btn.variant} asChild>
            <a href={btn.link}>{btn.text}</a>
          </Button>
        ))}
      </div>
    </LandingSaleCtaSection>
  );
}
