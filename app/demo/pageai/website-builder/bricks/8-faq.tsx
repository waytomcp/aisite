import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

export default function Faq() {
  const faqItems = [
    {
      question: 'Is there a monthly fee?',
      answer: 'No! We offer a lifetime one-time pricing option. You pay once and get access forever.',
    },
    {
      question: 'Can I use my own domain?',
      answer: 'Yes, absolutely. You can connect your own custom domain to any website you build with PageAI.',
    },
    {
      question: 'Do you offer hosting?',
      answer: 'Yes, fast and secure hosting with SSL and CDN is included in all our plans at no extra cost.',
    },
    {
      question: 'Can I export my code?',
      answer: 'Yes, with the Pro and Agency plans, you can export your website to clean HTML/CSS/React code.',
    },
    {
      question: 'What is the white-label agency mode?',
      answer: 'The white-label mode allows you to remove all PageAI branding and use your own logo and domain for the client portal.',
    },
  ];

  return (
    <LandingFaqCollapsibleSection
      title="Frequently Asked Questions"
      description="Have questions? We have answers."
      faqItems={faqItems}
    />
  );
}
