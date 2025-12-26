import React from 'react';
import { LandingProductDetailProps } from '@/components/landing/LandingProductDetail';

export const productsData: LandingProductDetailProps[] = [
  {
    title: "Xmlite",
    description: (
      <>
        <p className="mb-4">
          Xmlite is a top manufacturer of professional stage lighting, producing one of <span className="text-primary-400 font-medium border-b border-primary-500/30">the best LED bar with pixel control 16 zones</span> on the market.
        </p>
        <p className="text-gray-400 leading-relaxed">
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
    featureTitle: "Xmlite: China's Leading Manufacturer of LED Bars with Pixel Control",
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
  {
    title: "Chauvet Professional COLORado PXL Bar 16",
    description: "A trusted brand for touring and outdoor productions, offering durability and strong global support.",
    tagline: "Best for: Outdoor events & Large-scale productions",
    pros: [
      "IP65-rated for outdoor use",
      "Motorized tilt with wide range",
      "Advanced color calibration"
    ],
    cons: [
      "Pixel zones partially grouped",
      "Higher price point"
    ]
  },
  {
    title: "Elation Professional 1M LED Pixel Bar",
    description: "Designed with camera environments in mind, this bar delivers flicker-free performance and precise color control.",
    tagline: "Best for: Broadcast, Film & Studio",
    pros: [
      "High refresh rate (Camera-safe)",
      "Dense LED layout",
      "IP65 protection"
    ],
    cons: [
      "Less focused on aggressive effects",
      "Optimized for controlled environments"
    ]
  },
  {
    title: "ADJ ElectraPix Bar 16",
    description: "Perfect for fast setup and flexible placement, especially where power access is limited.",
    tagline: "Best for: Mobile events, Weddings, Cable-free",
    pros: [
      "Battery-powered operation",
      "Wireless DMX compatibility",
      "Lightweight & easy to deploy"
    ],
    cons: [
      "Lower brightness than wired fixtures",
      "Battery runtime limits"
    ]
  },
  {
    title: "Elation Chorus Line 16",
    description: "Built for impact and motion, this fixture excels in high-energy live shows and dynamic stage designs.",
    tagline: "Best for: High-end stage & Music festivals",
    pros: [
      "True pixel-by-pixel control",
      "Motorized zoom and tilt",
      "High output for large venues"
    ],
    cons: [
      "Premium pricing",
      "Requires experienced programmers"
    ]
  }
];
