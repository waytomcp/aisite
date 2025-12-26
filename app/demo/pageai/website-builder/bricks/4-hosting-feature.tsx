import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function HostingFeature() {
  return (
    <LandingProductFeature
      title="Hosting, SSL & CDN Included"
      description="Forget about server management. We handle the hosting, security, and performance so you can focus on your business. All plans include unlimited bandwidth and storage."
      imageSrc="https://picsum.photos/id/48/800/600"
      imageAlt="Hosting Infrastructure"
      imagePosition="left"
      zoomOnHover
    />
  );
}
