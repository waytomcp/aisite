import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { 
  BlocksIcon, 
  Wand2Icon, 
  DatabaseIcon, 
  LockIcon, 
  CloudIcon, 
  BriefcaseIcon 
} from 'lucide-react';

export default function FeaturesList() {
  const features = [
    {
      title: '80+ Pre-built Blocks',
      description: 'Drag and drop professionally designed blocks to build your site in minutes.',
      icon: <BlocksIcon className="w-6 h-6" />,
    },
    {
      title: 'AI Copy Generator',
      description: 'Generate compelling copy for your website with our advanced AI tools.',
      icon: <Wand2Icon className="w-6 h-6" />,
    },
    {
      title: 'Integrated CMS',
      description: 'Manage your blog, portfolio, and other content with a powerful built-in CMS.',
      icon: <DatabaseIcon className="w-6 h-6" />,
    },
    {
      title: 'Membership Paywalls',
      description: 'Monetize your content by adding membership tiers and paywalls effortlessly.',
      icon: <LockIcon className="w-6 h-6" />,
    },
    {
      title: 'Hosting Included',
      description: 'Fast, secure hosting with SSL and CDN included in every plan.',
      icon: <CloudIcon className="w-6 h-6" />,
    },
    {
      title: 'White-label Agency Mode',
      description: 'Build websites for clients under your own brand with our agency features.',
      icon: <BriefcaseIcon className="w-6 h-6" />,
    },
  ];

  return (
    <LandingFeatureList
      title="Everything You Need to Succeed"
      description="PageAI provides all the tools you need to build, launch, and grow your online presence."
      featureItems={features}
    />
  );
}
