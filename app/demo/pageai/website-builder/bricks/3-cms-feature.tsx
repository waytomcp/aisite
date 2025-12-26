import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { Button } from '@/components/shared/ui/button';

export default function CmsFeature() {
  return (
    <LandingProductFeature
      title="Integrated CMS & Membership Paywalls"
      description="Don't just build a website, build a business. Our integrated CMS allows you to manage content easily, while our membership features let you monetize your expertise."
      imageSrc="https://picsum.photos/id/20/800/600"
      imageAlt="CMS Interface"
      imagePosition="right"
      zoomOnHover
    >
      <Button asChild>
        <a href="#">Explore CMS Features</a>
      </Button>
    </LandingProductFeature>
  );
}
