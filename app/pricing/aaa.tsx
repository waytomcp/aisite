0:{"a":"$@1","f":"","b":"-JAHJ_4XdsINrOQ5CEjy_"}
2:T5943,import { LandingHeader } from "@/components/landing";
import { LandingHeaderMenuItem } from "@/components/landing";
import { LandingPrimaryImageCtaSection } from "@/components/landing";
import { LandingShowcase } from "@/components/landing";
import { LandingShowcaseItem } from "@/components/landing";
import { LandingFeatureList } from "@/components/landing";
import { LandingProductCardSection } from "@/components/landing";
import { LandingProductCard } from "@/components/landing";
import { LandingProductFeature } from "@/components/landing";
import { LandingTestimonialGrid } from "@/components/landing";
import { LandingSaleCtaSection } from "@/components/landing";
import { LandingFooter } from "@/components/landing";
import { LandingFooterColumn } from "@/components/landing";
import { LandingFooterLink } from "@/components/landing";
import Image from "next/image";
import { Button } from "@/components/shared/ui/button";
import Link from "next/link";
import { Circle, Cpu, Factory, Settings, Star, Users, Wheat } from "lucide-react";

export default function Page() {
  return (
    <>
      <LandingHeader
        withBackground
        variant="primary"
        logoComponent={
          <div
            className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
            <Image
              src="https://hniurelftekdyiheqlqu.supabase.co/storage/v1/object/public/images/1765788149870-logo.png"
              alt="YZM Milling Solutions logo"
              width={200}
              height={200}
              className="h-8 w-8 rounded-full" />
            {"YZM Milling Solutions "}
          </div>
        }>
        <LandingHeaderMenuItem
          href="#products">
          {"Products"}
        </LandingHeaderMenuItem>
        <LandingHeaderMenuItem
          href="#services">
          {"Services"}
        </LandingHeaderMenuItem>
        <LandingHeaderMenuItem
          href="#about">
          {"About Us"}
        </LandingHeaderMenuItem>
        <LandingHeaderMenuItem
          type="button">
          {"Contact Us"}
        </LandingHeaderMenuItem>
      </LandingHeader>

      <LandingPrimaryImageCtaSection
        titleComponent={
          <h1
            className="font-normal text-2xl md:text-3xl lg:text-4xl leading-tight md:max-w-2xl">
            <span
              className="font-medium inline-block md:leading-12 px-2 md:px-4 py-1 md:py-2 bg-primary-500/20">Breakthrough Quality </span>
            {", Trusted Grain & Rice Machinery "}
          </h1>
        }
        description="ISO-certified, high-efficiency solutions for milling & processing. Delivering reliable performance for over 1,000 companies worldwide."
        imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80"
        imageAlt="Industrial milling machinery"
        imagePosition="right"
        imageShadow="hard"
        textPosition="left"
        variant="primary"
        withBackground={false}>
        <Button
          size="xl"
          asChild>
          <Link
            href="#contact">
            {"Get a Free Quote"}
          </Link>
        </Button>
        <Button
          size="xl"
          variant="outlinePrimary"
          asChild>
          <Link
            href="#products">
            {"View Products"}
          </Link>
        </Button>
      </LandingPrimaryImageCtaSection>

      <LandingShowcase
        title="Trusted by Industry Leaders"
        description="Over 1,000+ companies worldwide rely on our machinery"
        textPosition="left"
        withBackground
        variant="primary">
        <LandingShowcaseItem>
          <Factory
            className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Wheat
            className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Settings
            className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Cpu
            className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Star
            className="w-8 h-8" />
        </LandingShowcaseItem>
        <LandingShowcaseItem>
          <Circle
            className="w-8 h-8" />
        </LandingShowcaseItem>
      </LandingShowcase>

      <LandingFeatureList
        title="Why Choose YZM?"
        description="Industry-leading solutions backed by certification and expertise"
        featureItems={[{
            title: "Certified Quality",
            description: "Adhering to strict international standards for reliable performance and durability.",
            icon: <Star
  className="w-6 h-6" />
          }, {
            title: "Custom Solutions",
            description: "Tailored machinery designed to meet your specific milling and processing needs.",
            icon: <Settings
  className="w-6 h-6" />
          }, {
            title: "Advanced Technology",
            description: "Utilizing cutting-edge technology for optimal efficiency and maximum output.",
            icon: <Cpu
  className="w-6 h-6" />
          }, {
            title: "Expert Team",
            description: "Experienced professionals providing top-notch support and technical assistance.",
            icon: <Users
  className="w-6 h-6" />
          }, {
            title: "Global Reach",
            description: "Serving customers worldwide with reliable shipping and installation services.",
            icon: <Circle
  className="w-6 h-6" />
          }, {
            title: "Proven Track Record",
            description: "Decades of experience delivering high-performance milling solutions.",
            icon: <Factory
  className="w-6 h-6" />
          }]}
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary" />

      <LandingProductCardSection
        title="Product Categories"
        description="Comprehensive range of equipment for every stage of grain processing"
        withBackground
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
        textPosition="center">
        <LandingProductCard
          title="Cleaning Equipment"
          description="Efficiently removes impurities for a cleaner milling process"
          imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80"
          imageAlt="Cleaning equipment"
          variant="primary" />
        <LandingProductCard
          title="Milling & Polishing"
          description="Precisely mills and polishes grains to perfection"
          imageSrc="https://hniurelftekdyiheqlqu.supabase.co/storage/v1/object/public/images/1765788147246-image_0.png"
          imageAlt="Milling equipment"
          variant="primary" />
        <LandingProductCard
          title="Grading Systems"
          description="Sorts grains by size and quality for uniformity"
          imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80"
          imageAlt="Grading systems"
          variant="primary" />
        <LandingProductCard
          title="Stone Removal"
          description="Effectively removes stones and other foreign objects"
          imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80"
          imageAlt="Stone removal equipment"
          variant="primary" />
        <LandingProductCard
          title="Conveying Systems"
          description="Seamlessly transports grains throughout the milling process"
          imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80"
          imageAlt="Conveying systems"
          variant="primary" />
        <LandingProductCard
          title="Packaging Solutions"
          description="Automated packaging for efficient final product handling"
          imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80"
          imageAlt="Packaging equipment"
          variant="primary" />
      </LandingProductCardSection>

      <LandingProductCardSection
        title="Flagship Products"
        description="Our most advanced and reliable machinery solutions"
        withBackground={false}
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
        textPosition="center">
        <LandingProductCard
          title="Model XYZ-1000"
          description="High-performance milling for increased output and efficiency"
          imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80"
          imageAlt="Model XYZ-1000"
          variant="primary" />
        <LandingProductCard
          title="Model ABC-2000"
          description="Advanced polishing system with precision control"
          imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80"
          imageAlt="Model ABC-2000"
          variant="primary" />
        <LandingProductCard
          title="Model DEF-3000"
          description="Industrial-grade cleaning equipment for large operations"
          imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80"
          imageAlt="Model DEF-3000"
          variant="primary" />
        <LandingProductCard
          title="Model GHI-4000"
          description="Automated grading system with smart sorting technology"
          imageSrc="https://hniurelftekdyiheqlqu.supabase.co/storage/v1/object/public/images/1765788147246-image_0.png"
          imageAlt="Model GHI-4000"
          variant="primary" />
        <LandingProductCard
          title="Model JKL-5000"
          description="Heavy-duty stone removal with magnetic separation"
          imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80"
          imageAlt="Model JKL-5000"
          variant="primary" />
        <LandingProductCard
          title="Model MNO-6000"
          description="Complete conveying solution for seamless operations"
          imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80"
          imageAlt="Model MNO-6000"
          variant="primary" />
        <LandingProductCard
          title="Model PQR-7000"
          description="Integrated milling system with automated controls"
          imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80"
          imageAlt="Model PQR-7000"
          variant="primary" />
        <LandingProductCard
          title="Model STU-8000"
          description="Energy-efficient polishing with reduced power consumption"
          imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80"
          imageAlt="Model STU-8000"
          variant="primary" />
        <LandingProductCard
          title="Model VWX-9000"
          description="Multi-stage cleaning system for superior grain quality"
          imageSrc="https://hniurelftekdyiheqlqu.supabase.co/storage/v1/object/public/images/1765788147246-image_0.png"
          imageAlt="Model VWX-9000"
          variant="primary" />
      </LandingProductCardSection>

      <LandingProductFeature
        title="ISO9001:2000 Certified Quality"
        description="Every machine meets strict quality control standards. Our ISO9001:2000 certification ensures the highest quality and reliability in every product we manufacture. From design to delivery, we maintain rigorous testing protocols and quality assurance processes."
        imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80"
        imageAlt="Quality control process"
        imagePosition="right"
        imagePerspective="none"
        imageShadow="hard"
        textPosition="left"
        withBackground
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary" />

      <LandingTestimonialGrid
        title="What Our Clients Say"
        description="Trusted by leading companies in the grain processing industry"
        testimonialItems={[{
            url: "#",
            text: "YZM's machinery has significantly improved our processing efficiency. The quality and reliability are unmatched in the industry. We've seen a 40% increase in output since installation.",
            imageSrc: "/static/images/people/1.webp",
            name: "John Anderson",
            handle: "@johnanderson",
            verified: true
          }, {
            url: "#",
            text: "Outstanding customer service and technical support. The team was with us every step of the way, from installation to training. Highly recommend their solutions for any milling operation.",
            imageSrc: "/static/images/people/2.webp",
            name: "Sarah Chen",
            handle: "@sarahchen",
            verified: true
          }, {
            url: "#",
            text: "The ISO certification gives us confidence in the quality. We've been using YZM equipment for over five years and have never experienced major downtime. Excellent investment.",
            imageSrc: "/static/images/people/3.webp",
            name: "Michael Rodriguez",
            handle: "@mrodriguez",
            verified: true
          }, {
            url: "#",
            text: "Best milling equipment we've ever purchased. The advanced technology and automation features have reduced our labor costs while improving product quality significantly.",
            imageSrc: "/static/images/people/4.webp",
            name: "Emily Thompson",
            handle: "@emilyt",
            verified: true
          }, {
            url: "#",
            text: "YZM's custom solutions perfectly matched our specific needs. They took time to understand our operation and delivered exactly what we required. Professional service from start to finish.",
            imageSrc: "/static/images/people/5.webp",
            name: "David Kim",
            handle: "@davidkim",
            verified: true
          }, {
            url: "#",
            text: "Reliable, efficient, and built to last. We've processed millions of tons through their equipment with minimal maintenance. The return on investment has exceeded our expectations.",
            imageSrc: "/static/images/people/6.webp",
            name: "Lisa Martinez",
            handle: "@lisamartinez",
            verified: true
          }, {
            url: "#",
            text: "The technical expertise of the YZM team is impressive. They provided comprehensive training and ongoing support that has been invaluable to our operations.",
            imageSrc: "/static/images/people/7.webp",
            name: "Robert Johnson",
            handle: "@robertj",
            verified: true
          }, {
            url: "#",
            text: "We upgraded our entire facility with YZM equipment and couldn't be happier. The efficiency gains and product quality improvements have transformed our business.",
            imageSrc: "/static/images/people/8.webp",
            name: "Jennifer Lee",
            handle: "@jenniferlee",
            verified: true
          }, {
            url: "#",
            text: "Outstanding build quality and performance. After comparing multiple suppliers, YZM stood out for their attention to detail and commitment to customer satisfaction.",
            imageSrc: "/static/images/people/9.webp",
            name: "Thomas Brown",
            handle: "@thomasbrown",
            verified: true
          }]}
        withBackground={false}
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary" />

      <LandingSaleCtaSection
        title="Ready to Transform Your Milling Operation?"
        description="Contact us today for a free consultation and quote. Our experts are ready to help you find the perfect solution."
        withBackground
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
        footerComponent={
          <div
            className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form
                className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2">Name </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2">Company </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2">Email </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2">Phone </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2">Message </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full">Submit Inquiry</Button>
              </form>
            </div>
            <div
              className="space-y-4">
              <h3
                className="text-xl font-semibold">Contact Information </h3>
              <div
                className="space-y-2">
                <p>
                  <strong>Phone: </strong>
                  {"+1 555-123-4567 "}
                </p>
                <p>
                  <strong>WeChat: </strong>
                  {"YZMMillingSolutions "}
                </p>
                <p>
                  <strong>Email: </strong>
                  {"info@yzmmilling.com "}
                </p>
                <p>
                  <strong>Address: </strong>
                  {"123 Industrial Park, Manufacturing District "}
                </p>
              </div>
            </div>
          </div>
        }>
        <Button
          size="xl"
          asChild>
          <Link
            href="#contact">
            {"Get Free Quote"}
          </Link>
        </Button>
        <Button
          size="xl"
          variant="outlinePrimary"
          asChild>
          <Link
            href="#products">
            {"Browse Products"}
          </Link>
        </Button>
      </LandingSaleCtaSection>

      <LandingFooter
        title="YZM Milling Solutions"
        description="Leading provider of grain and rice processing machinery"
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
        withBackgroundGradient={false}
        footnote={
          <div
            className="text-center p-6">
            <p>Â© 2024 YZM Milling Solutions. All rights reserved. </p>
          </div>
        }
        logoComponent={
          <div
            className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
            <Image
              src="https://hniurelftekdyiheqlqu.supabase.co/storage/v1/object/public/images/1765788149870-logo.png"
              alt="YZM Milling Solutions logo"
              width={200}
              height={200}
              className="h-8 w-8 rounded-full" />
            {"YZM Milling Solutions "}
          </div>
        }>
        <LandingFooterColumn
          title="Products">
          <LandingFooterLink
            href="#cleaning">
            {"Cleaning Equipment"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#milling">
            {"Milling & Polishing"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#grading">
            {"Grading Systems"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#stone">
            {"Stone Removal"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#conveying">
            {"Conveying Systems"}
          </LandingFooterLink>
        </LandingFooterColumn>
        <LandingFooterColumn
          title="Services">
          <LandingFooterLink
            href="#installation">
            {"Installation"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#maintenance">
            {"Maintenance"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#training">
            {"Training"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#support">
            {"Technical Support"}
          </LandingFooterLink>
        </LandingFooterColumn>
        <LandingFooterColumn
          title="Company">
          <LandingFooterLink
            href="#about">
            {"About Us"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#quality">
            {"Quality Assurance"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#certifications">
            {"Certifications"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#contact">
            {"Contact"}
          </LandingFooterLink>
        </LandingFooterColumn>
        <LandingFooterColumn
          title="Legal">
          <LandingFooterLink
            href="#privacy">
            {"Privacy Policy"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#terms">
            {"Terms of Service"}
          </LandingFooterLink>
          <LandingFooterLink
            href="#warranty">
            {"Warranty"}
          </LandingFooterLink>
        </LandingFooterColumn>
      </LandingFooter>
    </>
  );
}
1:"$2"
