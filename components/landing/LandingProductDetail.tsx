import React from 'react';
import { CheckIcon, XIcon, MapPinIcon } from 'lucide-react';
import clsx from 'clsx';

export interface LandingProductDetailProps {
  // Level 1: Company/Product Info
  title: string;
  description: string | React.ReactNode;
  tagline?: string;
  location?: string;
  cardBackgroundClassName?: string;
  
  // Level 2: Gallery (Optional)
  galleryImages?: Array<{ src: string; alt?: string }>;
  
  // Level 3: Features / Review
  featureTitle?: string;
  featureDescription?: string | React.ReactNode;
  pros?: string[];
  cons?: string[];
  whoIsItFor?: string[];
  whyWeLoveIt?: string | React.ReactNode;
  
  // Styling
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const LandingProductDetail = ({
  title,
  description,
  tagline,
  location,
  cardBackgroundClassName,
  galleryImages,
  featureTitle,
  featureDescription,
  pros = [],
  cons = [],
  whoIsItFor = [],
  whyWeLoveIt,
  className,
  variant = 'primary',
}: LandingProductDetailProps) => {
  const hasGallery = galleryImages && galleryImages.length > 0;
  const hasFeatures = featureTitle || pros.length > 0 || cons.length > 0 || whoIsItFor.length > 0 || whyWeLoveIt;

  return (
    <section className={clsx("flex flex-col gap-4 w-full", className)}>
      {/* Level 1: Company Info */}
      <div className="container-wide mx-auto px-6 pb-6 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              {title}
            </h2>
            <div className="space-y-6">
              <div className="text-lg text-slate-500 dark:text-gray-300">
                {description}
              </div>
              {location && (
                <div className="flex items-center gap-2 text-slate-500 dark:text-gray-500 text-sm font-medium">
                   <MapPinIcon className="w-4 h-4" />
                   <span>{location}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className={clsx(
              "w-full max-w-sm aspect-[4/3] mx-auto md:mx-0 rounded-2xl shadow-lg relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8 transition-transform hover:scale-105 duration-500",
              cardBackgroundClassName || "bg-gradient-to-br from-blue-500 to-blue-200"
            )}>
              <h2 className="text-3xl md:text-4xl font-semibold text-white text-center leading-tight mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {title}
              </h2>
              {tagline && (
                <div className="text-white/85 text-sm mt-1 text-center leading-relaxed line-clamp-2 font-sans">
                  {tagline}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Level 2: Gallery (Optional) */}
      {hasGallery && (
        <div className="container-wide mx-auto px-6 -mt-4"> {/* Negative margin to pull up */}
          <div className={clsx(
            "grid gap-4 max-w-5xl",
            galleryImages.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
          )}>
            {galleryImages.map((img, index) => (
              <div key={index} className="aspect-video relative rounded-xl overflow-hidden bg-gray-800 shadow-lg group">
                <img 
                  src={img.src} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                  alt={img.alt || `Gallery image ${index + 1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Level 3: Feature Text & Lists */}
      {hasFeatures && (
        <div className="container-wide mx-auto px-6 pb-12 mt-8 w-full">
           {featureTitle && (
             <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
               {featureTitle}
             </h3>
           )}
           
           {featureDescription && (
             <div className="text-slate-500 dark:text-gray-300 mb-10 max-w-4xl text-lg leading-relaxed">
               {featureDescription}
             </div>
           )}

           <div className="flex flex-col gap-8 w-full">
              {/* Pros */}
              {pros.length > 0 && (
                <div>
                  <h4 className="font-semibold text-xl mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-green-500">Pros</span>
                  </h4>
                  <ul className="space-y-3">
                    {pros.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Cons */}
              {cons.length > 0 && (
                <div>
                  <h4 className="font-semibold text-xl mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="text-red-500">Cons</span>
                  </h4>
                   <ul className="space-y-3">
                    {cons.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-gray-300">
                        <XIcon className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
               {/* Who It's For */}
              {whoIsItFor.length > 0 && (
                <div className="bg-slate-100 dark:bg-gray-900/50 p-6 rounded-xl border border-slate-200 dark:border-gray-800">
                  <h4 className="font-semibold text-lg mb-4 text-slate-900 dark:text-white">Who They're For</h4>
                   <ul className="space-y-3 text-slate-600 dark:text-gray-300">
                    {whoIsItFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
               {/* Why We Love It */}
              {whyWeLoveIt && (
                <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl border border-primary-100 dark:border-primary-900/50">
                  <h4 className="font-semibold text-lg mb-4 text-primary-700 dark:text-primary-300">Why We Love Them</h4>
                  <div className="text-slate-600 dark:text-gray-300 text-lg">
                    {whyWeLoveIt}
                  </div>
                </div>
              )}
           </div>
        </div>
      )}
    </section>
  );
};

export default LandingProductDetail;
