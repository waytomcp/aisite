import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { Button } from '@/components/shared/ui/button';

export default function Cta() {
  return (
    <LandingSaleCtaSection
      title="Need Help Choosing the Right LED Bar?"
      description="Not sure which 16-zone pixel LED bar fits your project or budget? Our lighting specialists can help you compare options and design the right solution."
      withBackground
      variant="primary"
      innerContainerClassName="container-wide"
    >
      <div className="flex gap-4 justify-center mt-6">
        <Button size="xl" variant="secondary" asChild>
          <a href="#">Get Expert Advice</a>
        </Button>
        <Button size="xl" variant="outline" asChild>
          <a href="#">Request a Product Comparison</a>
        </Button>
      </div>
    </LandingSaleCtaSection>
  );
}
