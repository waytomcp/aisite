import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { MusicIcon, TheaterIcon, VideoIcon, BuildingIcon, ZapIcon, CameraIcon, SettingsIcon, Grid as GridIcon, Sun as SunIcon, Shield as ShieldIcon } from 'lucide-react';
import { CatalogItemData } from '../data/types';

const iconMap = {
  MusicIcon,
  TheaterIcon,
  VideoIcon,
  BuildingIcon,
  ZapIcon,
  CameraIcon,
  SettingsIcon,
  GridIcon,
  SunIcon,
  ShieldIcon,
};

export default function CatalogIntro({ data }: { data: CatalogItemData['intro'] }) {
  const applications = data.features.map(feature => ({
    ...feature,
    icon: iconMap[feature.iconName] ? React.createElement(iconMap[feature.iconName], { className: "w-6 h-6" }) : null,
  }));

  return (
    <LandingFeatureList
      title={data.title}
      description={
        <div className="text-left">
          {typeof data.description === 'string' ? <p>{data.description}</p> : data.description}
        </div>
      }
      featureItems={applications}
      variant="secondary"
    />
  );
}

import React from 'react';
