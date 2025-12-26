import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { Button } from '@/components/shared/ui/button';

export default function Cta() {
  return (
    <LandingSaleCtaSection
      title="Get Lifetime Access to PageAI Today"
      description="Stop paying monthly subscriptions. Build unlimited websites with our lifetime deal."
      withBackground
      variant="secondary"
    >
      <div className="flex gap-4 justify-center mt-6">
        <Button size="xl" asChild>
          <a href="#">Get Lifetime Access</a>
        </Button>
        <Button size="xl" variant="outline" asChild>
          <a href="#">View Demo</a>
        </Button>
      </div>
    </LandingSaleCtaSection>
  );
}
