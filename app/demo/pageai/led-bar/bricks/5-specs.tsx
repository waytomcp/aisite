import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';

export default function Specs() {
  const specs = [
    {
      title: 'Light Source',
      description: '16 x 45W RGBW LEDs',
    },
    {
      title: 'Zoom Range',
      description: '5.8° to 47.9° Motorized',
    },
    {
      title: 'Tilt',
      description: '200° Motorized (16-bit)',
    },
    {
      title: 'Output',
      description: 'Up to 51,000 lm',
    },
    {
      title: 'IP Rating',
      description: 'IP65 (Outdoor/Wet location)',
    },
    {
      title: 'Control Protocols',
      description: 'DMX, RDM, Art-Net, Kling-Net, sACN',
    },
    {
      title: 'Refresh Rate',
      description: 'Up to 44,000 Hz',
    },
    {
      title: 'Weight',
      description: '18 kg / 39.7 lbs',
    },
  ];

  return (
    <LandingProductFeatureKeyPoints
      title="Technical Specifications"
      description="Built to meet the rigorous standards of professional production."
      imageSrc="https://picsum.photos/id/400/800/600"
      imageAlt="Technical Drawing"
      keyPoints={specs}
      imagePosition="right"
    />
  );
}
