import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { CatalogItemData } from '../data/types';

export default function GenericFaq({ data }: { data: CatalogItemData['faq'] }) {
  return (
    <LandingFaqCollapsibleSection
      title={data.title}
      description={data.description}
      faqItems={data.items}
      innerContainerClassName="container-wide"
      className="!py-8 !lg:py-10"
    />
  );
}
