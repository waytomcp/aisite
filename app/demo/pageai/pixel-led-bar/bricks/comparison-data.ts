
export interface ComparisonColumn {
  key: string;
  label: string;
}

export interface ComparisonItem {
  id: string;
  product: string;
  pixelControl: string;
  outdoorRating: string;
  protocols: string;
  bestUse: string;
  [key: string]: string;
}

export const comparisonColumns: ComparisonColumn[] = [
  { key: 'product', label: 'Product' },
  { key: 'pixelControl', label: 'Pixel Control' },
  { key: 'outdoorRating', label: 'Outdoor Rating' },
  { key: 'protocols', label: 'Protocols' },
  { key: 'bestUse', label: 'Best Use' },
];

export const comparisonData: ComparisonItem[] = [
  {
    id: 'xmlite',
    product: 'Xmlite',
    pixelControl: 'True multi-zone',
    outdoorRating: 'Optional',
    protocols: 'DMX / Art-Net',
    bestUse: 'Engineering',
  },
  {
    id: 'chauvet',
    product: 'Chauvet PXL',
    pixelControl: 'Partial zones',
    outdoorRating: 'IP65',
    protocols: 'DMX/Art-Net/sACN',
    bestUse: 'Touring',
  },
  {
    id: 'elation-1m',
    product: 'Elation 1M',
    pixelControl: 'True pixel',
    outdoorRating: 'IP65',
    protocols: 'DMX / Art-Net',
    bestUse: 'Broadcast',
  },
  {
    id: 'adj',
    product: 'ADJ ElectraPix',
    pixelControl: '16 zones',
    outdoorRating: 'IP65',
    protocols: 'DMX / Wireless',
    bestUse: 'Mobile',
  },
  {
    id: 'chorus-line',
    product: 'Chorus Line 16',
    pixelControl: 'True pixel',
    outdoorRating: 'IP65',
    protocols: 'DMX / Art-Net',
    bestUse: 'Festivals',
  },
];
