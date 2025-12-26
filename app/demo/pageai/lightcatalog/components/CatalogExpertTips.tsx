import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { CatalogItemData } from '../data/types';

export default function CatalogExpertTips({ data }: { data: CatalogItemData['expertTips'] }) {
  return (
    <LandingProductFeature
      title={data.title}
      description={data.description}
      imageSrc={data.imageSrc}
      imageAlt="Expert Tip"
      imagePosition="right"
      variant="secondary"
      withBackground
    >
      <LandingProductFeatureKeyPoints
        keyPoints={data.tips}
        variant="secondary"
      />
    </LandingProductFeature>
  );
}
