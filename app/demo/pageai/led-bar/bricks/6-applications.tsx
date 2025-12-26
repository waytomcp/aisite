import { LandingBentoGridSection } from '@/components/landing/bento-grid/LandingBentoGridSection';
import { LandingBentoGridImageItem } from '@/components/landing/bento-grid/LandingBentoGridImageItem';

export default function Applications() {
  return (
    <LandingBentoGridSection
      title="Versatile Applications"
      description="One fixture, endless possibilities."
      withBackground
      variant="secondary"
    >
      <LandingBentoGridImageItem
        title="Festivals"
        description="High output and IP65 rating make it perfect for main stages."
        imageSrc="https://picsum.photos/id/452/600/400"
        colSpan={2}
      />
      <LandingBentoGridImageItem
        title="TV & Film"
        description="Flicker-free and silent operation."
        imageSrc="https://picsum.photos/id/453/600/400"
        colSpan={1}
      />
      <LandingBentoGridImageItem
        title="Touring"
        description="Rugged build quality withstands the road."
        imageSrc="https://picsum.photos/id/454/600/400"
        colSpan={1}
      />
      <LandingBentoGridImageItem
        title="Architectural"
        description="Dynamic facade lighting with pixel control."
        imageSrc="https://picsum.photos/id/455/600/400"
        colSpan={2}
      />
    </LandingBentoGridSection>
  );
}
