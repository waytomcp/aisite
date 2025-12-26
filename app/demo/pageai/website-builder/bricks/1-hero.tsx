import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

export default function Hero() {
  return (
    <LandingPrimaryImageCtaSection
      title="Build Stunning Websites in Minutes with AI"
      description="The all-in-one website builder for freelancers and small businesses. Create professional websites with 80+ pre-built blocks, AI copy generation, and integrated CMS."
      imageSrc="https://picsum.photos/id/1/800/600"
      imageAlt="PageAI Dashboard"
      withBackground
      withBackgroundGlow
      variant="primary"
    >
      <Button size="xl" asChild>
        <a href="#">Get Started for Free</a>
      </Button>

      <Button size="xl" variant="outlinePrimary" asChild>
        <a href="#">View Demo</a>
      </Button>

      <LandingSocialProof
        className="mt-6 w-full"
        showRating
        numberOfUsers={10000}
        suffixText="happy users"
        avatarItems={[
          {
            imageSrc: 'https://picsum.photos/id/64/100/100',
            name: 'John Doe',
          },
          {
            imageSrc: 'https://picsum.photos/id/65/100/100',
            name: 'Jane Doe',
          },
          {
            imageSrc: 'https://picsum.photos/id/669/100/100',
            name: 'Alice Doe',
          },
        ]}
      />
    </LandingPrimaryImageCtaSection>
  );
}
