import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      text: 'PageAI helped me launch my freelance portfolio in just one afternoon. The AI copy generator is a lifesaver!',
      handle: '@sarahj_designs',
      imageSrc: 'https://picsum.photos/id/64/100/100',
      featured: true,
    },
    {
      name: 'Mike Ross',
      text: 'The integrated CMS is fantastic. I can manage all my client sites from one dashboard.',
      handle: '@mikeross_dev',
      imageSrc: 'https://picsum.photos/id/65/100/100',
    },
    {
      name: 'Emily Chen',
      text: 'I love the white-label feature. It allows me to present a professional image to my clients.',
      handle: '@emily_agency',
      imageSrc: 'https://picsum.photos/id/669/100/100',
    },
    {
      name: 'David Miller',
      text: 'Best investment I made for my small business. The lifetime pricing is a steal.',
      handle: '@dave_biz',
      imageSrc: 'https://picsum.photos/id/64/100/100',
    },
  ];

  return (
    <LandingTestimonialGrid
      title="Trusted by 10,000+ Entrepreneurs"
      description="See what our users are saying about PageAI."
      testimonialItems={testimonials}
      withBackground
      variant="secondary"
    />
  );
}
