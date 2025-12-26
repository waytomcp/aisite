import { CatalogItemData } from './types';
import React from 'react';

export const products: CatalogItemData[] = [
  {
    slug: 'pixel-led-bar-16-zones',
    metadata: {
      title: 'The Best LED Bar with Pixel Control – 16 Zones | Professional Lighting Guide',
      description: 'Deliver dynamic visuals and precise pixel mapping with 16-zone pixel-controlled LED bars. A guide for lighting designers and production teams.'
    },
    hero: {
      title: "The Best LED Bar with Pixel Control – 16 Zones",
      description: "Deliver dynamic visuals, precise pixel mapping, and professional-grade performance with 16-zone pixel-controlled LED bars. This guide helps lighting designers, production teams, and rental companies choose the right fixture for their next project.",
      buttonText: "Compare LED Bars",
      buttonLink: "#comparison",
      avatarImage: "https://picsum.photos/id/1005/100/100",
      avatarName: "Great K2 Team",
      reportText: "Industry Report by"
    },
    intro: {
      title: "What Is a 16-Zone Pixel Control LED Bar?",
      description: (
        <div className="text-left">
          <p className="mb-4">
            A <strong>16-zone pixel control LED bar</strong> allows each section of the fixture to be controlled independently, enabling complex lighting effects such as color chases, waves, gradients, and video-style animations.
          </p>
          <p>
            Unlike standard LED bars that act as a single light source, pixel-controlled bars offer <strong>creative freedom and precision</strong>, making them essential for modern lighting design.
          </p>
        </div>
      ),
      features: [
        {
          title: 'Concerts & Festivals',
          description: 'High-energy pixel mapping and dynamic effects.',
          iconName: 'MusicIcon',
        },
        {
          title: 'Theater & Touring',
          description: 'Versatile fixtures for changing stage designs.',
          iconName: 'TheaterIcon',
        },
        {
          title: 'Broadcast Studios',
          description: 'Flicker-free performance for camera environments.',
          iconName: 'VideoIcon',
        },
        {
          title: 'Architectural',
          description: 'Immersive installations and building lighting.',
          iconName: 'BuildingIcon',
        },
      ]
    },
    products: [
      {
        title: "Xmlite",
        description: (
          <>
            <p className="mb-4">
              Xmlite is a top manufacturer of professional stage lighting, producing one of <span className="text-primary-600 dark:text-primary-400 font-medium border-b border-primary-500/30">the best LED bar with pixel control 16 zones</span> on the market.
            </p>
            <p className="text-slate-500 dark:text-gray-400 leading-relaxed">
              Established in 2010, Xmlite integrates advanced R&D, large-scale production, and global sales from its 25,000m² factory in Guangzhou, exporting to over 60 countries.
            </p>
          </>
        ),
        tagline: "Xmlite: China's Leading Manufacturer of LED Bars with Pixel Control",
        location: "Guangzhou, China",
        galleryImages: [
          { src: "https://picsum.photos/id/180/800/600", alt: "Xmlite Factory Exterior" },
          { src: "https://picsum.photos/id/250/800/600", alt: "Xmlite Production Line" }
        ],
        featureTitle: "China's Leading Manufacturer of LED Bars with Pixel Control",
        featureDescription: "Xmlite is an innovative technology enterprise specializing in high-performance stage lighting, including advanced LED bars with pixel control. With comprehensive certifications (ISO9001, CE, ROHS) and technical service centers in over 30 cities, Xmlite delivers exceptional quality and support.",
        pros: [
          "Strong R&D team with engineers averaging 12+ years of industry experience",
          "First in the industry to offer 3-year after-sales service and bulb warranty",
          "Comprehensive certifications and high manufacturing reliability"
        ],
        cons: [
          "Extensive product catalog may require time for new buyers to navigate",
          "Advanced features may be more than what entry-level users require"
        ],
        whoIsItFor: [
          "Professional lighting users, engineering contractors, and wholesalers",
          "Designers seeking reliable, high-performance alternatives to other international brands"
        ],
        whyWeLoveIt: "An exceptional combination of industry-leading service, R&D strength, and product reliability."
      },
      // ... (keeping one product for brevity in this example, normally would include all)
    ],
    comparison: {
      title: "Quick Comparison Overview",
      columns: [
        { key: 'product', label: 'Product' },
        { key: 'pixelControl', label: 'Pixel Control' },
        { key: 'outdoorRating', label: 'Outdoor Rating' },
        { key: 'protocols', label: 'Protocols' },
        { key: 'bestUse', label: 'Best Use' },
      ],
      data: [
        {
          id: 'xmlite',
          product: 'Xmlite',
          pixelControl: 'True multi-zone',
          outdoorRating: 'Optional',
          protocols: 'DMX / Art-Net',
          bestUse: 'Engineering',
        },
        // ... more data
      ]
    },
    expertTips: {
      title: "Expert Tips: Choosing the Right Pixel LED Bar",
      description: "Make an informed decision with these insights from our lighting specialists.",
      imageSrc: "https://picsum.photos/id/460/600/600",
      tips: [
        {
          title: 'True Pixel Control Matters',
          description: 'Not all “16-zone” fixtures offer fully independent pixels. Check control channel mapping carefully.',
        },
        {
          title: 'Camera-Safe Performance',
          description: 'For broadcast and film, high refresh rates and flicker-free output are essential.',
        },
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Common questions about pixel LED bars.",
      items: [
        {
          question: 'Are all 16-zone LED bars truly pixel-controlled?',
          answer: 'No. Some fixtures group LEDs internally. Always review DMX channel maps and manufacturer documentation.',
        },
        {
          question: 'Is IP65 necessary for outdoor use?',
          answer: 'Yes. IP65 or higher protects against dust and water, essential for outdoor events.',
        },
      ]
    },
    cta: {
      title: "Need Help Choosing the Right LED Bar?",
      description: "Not sure which 16-zone pixel LED bar fits your project or budget? Our lighting specialists can help you compare options and design the right solution.",
      buttons: [
        { text: "Get Expert Advice", link: "#", variant: "secondary" },
        { text: "Request a Product Comparison", link: "#", variant: "outline" }
      ]
    },
    similarTopics: {
      title: "Similar Topics",
      items: [
        {
          title: 'DMX Control Basics',
          description: 'Understanding DMX512 for pixel lighting control.',
          image: 'https://picsum.photos/id/1018/400/200',
          link: '#'
        },
      ]
    }
  },
  // Add 4 more dummy items with minimal data for the catalog demo
  {
    slug: 'moving-head-beam',
    metadata: {
      title: 'Top Moving Head Beam Lights | Stage Lighting Guide',
      description: 'Review of the best moving head beam lights for concerts and events.'
    },
    hero: {
      title: "Top Moving Head Beam Lights",
      description: "Powerful, sharp beams that cut through the darkness. Essential for high-energy concerts and festivals.",
      buttonText: "See Top Picks",
      buttonLink: "#products",
      avatarImage: "https://picsum.photos/id/1011/100/100",
      avatarName: "Lighting Pro",
      reportText: "Reviewed by"
    },
    intro: {
      title: "Why Moving Head Beams?",
      description: "Moving head beams provide the punch and aerial effects needed for large stages.",
      features: [
        { title: "Long Throw", description: "Beams that reach the back of the stadium.", iconName: "ZapIcon" },
        { title: "Fast Movement", description: "Rapid pan and tilt for dynamic effects.", iconName: "SettingsIcon" }
      ]
    },
    products: [], // Empty for demo
    comparison: { title: "Beam Comparison", columns: [], data: [] },
    expertTips: { title: "Beam Tips", description: "Focus on optics.", imageSrc: "https://picsum.photos/id/461/600/600", tips: [] },
    faq: { title: "Beam FAQ", description: "Questions about beams.", items: [] },
    cta: { title: "Need a Beam Quote?", description: "Contact us.", buttons: [] },
    similarTopics: { title: "More Lights", items: [] }
  },
  {
    slug: 'led-wash-zoom',
    metadata: {
      title: 'Best LED Wash Lights with Zoom',
      description: 'Versatile wash lights for stage coverage and color mixing.'
    },
    hero: {
      title: "Best LED Wash Lights with Zoom",
      description: "Smooth color mixing and variable beam angles for perfect stage coverage.",
      buttonText: "Explore Washes",
      buttonLink: "#products",
      avatarImage: "https://picsum.photos/id/1012/100/100",
      avatarName: "Color Master",
      reportText: "Curated by"
    },
    intro: {
      title: "The Power of Wash",
      description: "Wash lights paint the stage with color and provide general illumination.",
      features: []
    },
    products: [],
    comparison: { title: "Wash Comparison", columns: [], data: [] },
    expertTips: { title: "Wash Tips", description: "", imageSrc: "", tips: [] },
    faq: { title: "", description: "", items: [] },
    cta: { title: "", description: "", buttons: [] },
    similarTopics: { title: "", items: [] }
  },
  {
    slug: 'hybrid-moving-head',
    metadata: {
      title: 'Hybrid Moving Heads: Spot, Beam, Wash',
      description: 'The all-in-one solution for versatile lighting rigs.'
    },
    hero: {
      title: "Hybrid Moving Heads: The All-in-One Solution",
      description: "Why buy three fixtures when one can do it all? Spot, Beam, and Wash in a single unit.",
      buttonText: "View Hybrids",
      buttonLink: "#products",
      avatarImage: "https://picsum.photos/id/1013/100/100",
      avatarName: "Tech Lead",
      reportText: "Analysis by"
    },
    intro: {
      title: "Versatility Defined",
      description: "Hybrids offer maximum flexibility for rental companies.",
      features: []
    },
    products: [],
    comparison: { title: "Hybrid Comparison", columns: [], data: [] },
    expertTips: { title: "Hybrid Tips", description: "", imageSrc: "", tips: [] },
    faq: { title: "", description: "", items: [] },
    cta: { title: "", description: "", buttons: [] },
    similarTopics: { title: "", items: [] }
  },
  {
    slug: 'battery-uplight',
    metadata: {
      title: 'Wireless Battery Uplights Review',
      description: 'Cable-free lighting for events and weddings.'
    },
    hero: {
      title: "Wireless Battery Uplights",
      description: "Transform any venue in minutes with cable-free, battery-powered LED uplights.",
      buttonText: "Go Wireless",
      buttonLink: "#products",
      avatarImage: "https://picsum.photos/id/1014/100/100",
      avatarName: "Event Pro",
      reportText: "Tested by"
    },
    intro: {
      title: "Freedom from Cables",
      description: "Setup faster and cleaner with wireless DMX and battery power.",
      features: []
    },
    products: [],
    comparison: { title: "Uplight Comparison", columns: [], data: [] },
    expertTips: { title: "Uplight Tips", description: "", imageSrc: "", tips: [] },
    faq: { title: "", description: "", items: [] },
    cta: { title: "", description: "", buttons: [] },
    similarTopics: { title: "", items: [] }
  }
];
