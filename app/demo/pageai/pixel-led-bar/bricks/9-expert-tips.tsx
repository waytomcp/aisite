import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export default function ExpertTips() {
  const tips = [
    {
      title: 'True Pixel Control Matters',
      description: 'Not all “16-zone” fixtures offer fully independent pixels. Check control channel mapping carefully.',
    },
    {
      title: 'Camera-Safe Performance',
      description: 'For broadcast and film, high refresh rates and flicker-free output are essential.',
    },
    {
      title: 'Environment First',
      description: 'Outdoor and touring shows require IP-rated fixtures and durable housing.',
    },
    {
      title: 'Control Compatibility',
      description: 'Ensure compatibility with your lighting console and network protocol.',
    },
  ];

  return (
    <LandingProductFeature
      title="Expert Tips: Choosing the Right Pixel LED Bar"
      description="Make an informed decision with these insights from our lighting specialists."
      imageSrc="https://picsum.photos/id/460/600/600"
      imageAlt="Lighting Expert"
      imagePosition="right"
      variant="secondary"
      withBackground
    >
      <LandingProductFeatureKeyPoints
        keyPoints={tips}
        variant="secondary"
      />
    </LandingProductFeature>
  );
}
