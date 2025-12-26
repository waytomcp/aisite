import { LandingPricingSection } from '@/components/landing/pricing/LandingPricingSection';
import { LandingPricingPlan } from '@/components/landing/pricing/LandingPricingPlan';

export default function Pricing() {
  return (
    <LandingPricingSection
      title="Simple, Transparent Pricing"
      description="Choose the plan that's right for you. All plans include a 30-day money-back guarantee."
    >
      <LandingPricingPlan
        title="Hobbyist"
        description="Perfect for personal projects"
        price="$19"
        period="one-time"
        features={[
          '1 Website',
          'Free Hosting',
          'Free SSL',
          'Community Support',
        ]}
      />
      <LandingPricingPlan
        title="Pro"
        description="For serious entrepreneurs"
        price="$49"
        period="one-time"
        highlighted
        features={[
          '5 Websites',
          'Priority Support',
          'Analytics',
          'Remove Branding',
          'AI Copy Generator',
        ]}
      />
      <LandingPricingPlan
        title="Agency"
        description="For freelancers and agencies"
        price="$199"
        period="one-time"
        features={[
          'Unlimited Websites',
          'White-label Mode',
          'Client Management',
          'API Access',
          'Priority Support',
        ]}
      />
    </LandingPricingSection>
  );
}
