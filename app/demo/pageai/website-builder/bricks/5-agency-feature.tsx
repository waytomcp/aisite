import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function AgencyFeature() {
  return (
    <LandingProductFeature
      title="White-label Agency Mode"
      description="Build websites for your clients under your own brand. Remove PageAI branding, use your own domain, and charge your clients whatever you want. Perfect for freelancers and agencies."
      imageSrc="https://picsum.photos/id/60/800/600"
      imageAlt="Agency Dashboard"
      imagePosition="right"
      zoomOnHover
    />
  );
}
