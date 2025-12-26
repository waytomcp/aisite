import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

export default function Faq() {
  const faqItems = [
    {
      question: 'Are all 16-zone LED bars truly pixel-controlled?',
      answer: 'No. Some fixtures group LEDs internally. Always review DMX channel maps and manufacturer documentation.',
    },
    {
      question: 'Is IP65 necessary for outdoor use?',
      answer: 'Yes. IP65 or higher protects against dust and water, essential for outdoor events.',
    },
    {
      question: 'DMX vs Art-Net – which should I use?',
      answer: 'DMX is simple and reliable. Art-Net and sACN are better for large pixel systems and complex mapping.',
    },
    {
      question: 'Are battery-powered pixel bars suitable for concerts?',
      answer: 'They work well for short shows and mobile events but may not match the output of wired fixtures.',
    },
  ];

  return (
    <LandingFaqCollapsibleSection
      title="Frequently Asked Questions"
      description="Common questions about pixel LED bars."
      faqItems={faqItems}
      innerContainerClassName="container-wide"
    />
  );
}
