import { LandingSimpleCtaSection } from '@/components/landing/cta/LandingSimpleCtaSection';

export default function DemoCtaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-20">
        <h1 className="text-4xl font-bold text-center mb-10">LandingSimpleCtaSection Demo</h1>
        
        <div className="space-y-20">
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-500">Primary Variant</h2>
            <LandingSimpleCtaSection
              title="Ready to get started?"
              description="Join thousands of satisfied users today."
              buttonLabel="Sign Up Now"
              buttonLink="#"
              withBackground
              withBackgroundGlow
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-500">Secondary Variant</h2>
            <LandingSimpleCtaSection
              title="Want to learn more?"
              description="Check out our documentation for detailed guides."
              buttonLabel="Read Docs"
              buttonLink="#"
              variant="secondary"
              withBackground
            />
          </div>

           <div>
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-500">Minimal (No Background)</h2>
            <LandingSimpleCtaSection
              title="Simple and Clean"
              description="Just the essentials, no distractions."
              buttonLabel="Go"
              buttonLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
