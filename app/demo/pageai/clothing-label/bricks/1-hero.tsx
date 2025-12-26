import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingAvatar } from '@/components/landing/social-proof/LandingAvatar';

export default function Hero() {
  return (
    <LandingPrimaryTextCtaSection
      title="Ultimate Guide – The Best Clothing Label Material Manufacturer"
      description="Our definitive guide to the best clothing label material manufacturers. We've collaborated with textile experts, tested material durability, and analyzed manufacturing capabilities to identify the leading companies in washable clothing label materials."
      withBackground
      withBackgroundGlow
      variant="primary"
      textPosition="center"
    >
      <div className="flex items-center justify-center gap-4 mt-6">
        <LandingAvatar
          imageSrc="https://picsum.photos/id/1005/100/100"
          name="Great K2 Team"
          size="medium"
        />
        <div className="text-left">
          <p className="text-sm text-gray-500">Industry Report by</p>
          <p className="font-semibold">Great K2 Team</p>
        </div>
      </div>
    </LandingPrimaryTextCtaSection>
  );
}
