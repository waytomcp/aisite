import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';

export default function Hero() {
  return (
    <LandingPrimaryImageCtaSection
      title="The Ultimate LED Bar with Pixel Control"
      description="Experience the power of 16 zones of pixel control, motorized zoom, and IP65 weatherproof rating. The versatile workhorse for festivals, touring, and broadcast."
      imageSrc="https://picsum.photos/id/132/800/600"
      imageAlt="LED Bar Light Fixture"
      withBackground
      withBackgroundGlow
      variant="secondary"
      leadingComponent={<LandingDiscount discountText="New Release" discountDescription="2025 Model" />}
    >
      <Button size="xl" asChild>
        <a href="#contact">Get a Quote</a>
      </Button>

      <Button size="xl" variant="outlineSecondary" asChild>
        <a href="#specs">View Specs</a>
      </Button>
    </LandingPrimaryImageCtaSection>
  );
}
