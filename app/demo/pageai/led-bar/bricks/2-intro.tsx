import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { Button } from '@/components/shared/ui/button';

export default function Intro() {
  return (
    <LandingProductFeature
      title="A True Workhorse Fixture"
      description="Designed for the demands of modern lighting design. This motorized, outdoor-rated tilting batten features 16 powerful RGBW 45-watt LEDs. It offers a wide zoom range and 200° tilt for creating dynamic, sweeping effects in any environment."
      imageSrc="https://picsum.photos/id/146/800/600"
      imageAlt="LED Bar in action"
      imagePosition="left"
      zoomOnHover
    >
      <Button asChild variant="secondary">
        <a href="#">Learn More</a>
      </Button>
    </LandingProductFeature>
  );
}
