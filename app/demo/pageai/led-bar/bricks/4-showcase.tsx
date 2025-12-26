import { LandingShowcase } from '@/components/landing/showcase/LandingShowcase';
import { LandingShowcaseItem } from '@/components/landing/showcase/LandingShowcaseItem';

export default function Showcase() {
  return (
    <LandingShowcase
      title="See It In Action"
      description="From massive festival stages to intimate studio settings, the LED Bar delivers stunning visuals."
      withBackground
      variant="primary"
    >
      <LandingShowcaseItem
        title="Concert Touring"
        description="Dynamic pixel effects for high-energy shows"
        imageSrc="https://picsum.photos/id/158/800/600"
      />
      <LandingShowcaseItem
        title="Broadcast Studios"
        description="Perfect color rendering and flicker-free output"
        imageSrc="https://picsum.photos/id/250/800/600"
      />
      <LandingShowcaseItem
        title="Outdoor Events"
        description="Reliable IP65 performance in rain or shine"
        imageSrc="https://picsum.photos/id/319/800/600"
      />
    </LandingShowcase>
  );
}
