import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { MusicIcon, TheaterIcon, VideoIcon, BuildingIcon, ZapIcon, CameraIcon, SettingsIcon } from 'lucide-react';
import { CatalogItemData } from '../data/types';

const iconMap = {
  MusicIcon: <MusicIcon className="w-6 h-6" />,
  TheaterIcon: <TheaterIcon className="w-6 h-6" />,
  VideoIcon: <VideoIcon className="w-6 h-6" />,
  BuildingIcon: <BuildingIcon className="w-6 h-6" />,
  ZapIcon: <ZapIcon className="w-6 h-6" />,
  CameraIcon: <CameraIcon className="w-6 h-6" />,
  SettingsIcon: <SettingsIcon className="w-6 h-6" />,
};

export default function GenericIntro({ data }: { data: CatalogItemData['intro'] }) {
  const features = data.features.map(f => ({
    ...f,
    icon: iconMap[f.iconName]
  }));

  return (
    <LandingFeatureList
      title={data.title}
      description={data.description}
      featureItems={features}
      variant="secondary"
    />
  );
}
