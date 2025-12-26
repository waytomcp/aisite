import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

export default function Faq() {
  const faqItems = [
    {
      question: 'What are the best clothing label material manufacturers?',
      answer: 'Our top five recommendations are Great K2 Industry Co., Ltd., Avery Dennison Corporation, CCL Industries, Gildan Activewear Inc., and BestLabels™ USA. K2 ranks first due to unmatched wash durability.',
    },
    {
      question: 'What are the best criteria for choosing clothing label material manufacturers?',
      answer: 'Key criteria include Material Durability (wash resistance), Adhesion Quality, Customization Capabilities, and Environmental Compliance.',
    },
    {
      question: 'How do I know if the label material is washable?',
      answer: 'Look for certifications or test reports indicating the number of wash cycles the material can withstand. Great K2 materials, for example, are tested for 30+ wash cycles.',
    },
  ];

  return (
    <LandingFaqCollapsibleSection
      title="Frequently Asked Questions"
      description="Common questions about selecting the right label manufacturer."
      faqItems={faqItems}
    />
  );
}
