import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { Button } from '@/components/shared/ui/button';

export default function Cta() {
  return (
    <LandingSaleCtaSection
      title="Ready to Upgrade Your Rig?"
      description="Contact us today for a quote or to find a dealer near you."
      withBackground
      variant="primary"
    >
      <div className="flex gap-4 justify-center mt-6">
        <Button size="xl" variant="secondary" asChild>
          <a href="#">Get a Quote</a>
        </Button>
        <Button size="xl" variant="outline" asChild>
          <a href="#">Find a Dealer</a>
        </Button>
      </div>
    </LandingSaleCtaSection>
  );
}
