import { Product, Formula, ProcessStep } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'AMP001',
    name: 'Hyaluronic Hydration Ampoule',
    category: 'Hydration',
    description: 'Hydration-focused 30ml ampoule for everyday skincare lines.',
    moq: 3000,
    status: 'Ready Stock',
    image: 'https://picsum.photos/seed/amp001/800/800'
  },
  {
    id: '2',
    sku: 'AMP002',
    name: 'Vitamin C Brightening Ampoule',
    category: 'Brightening',
    description: 'Brightening ampoule designed for glow and tone improvement concepts.',
    moq: 3000,
    status: 'Ready Stock',
    image: 'https://picsum.photos/seed/amp002/800/800'
  },
  {
    id: '3',
    sku: 'AMP003',
    name: 'Niacinamide Tone-up Ampoule',
    category: 'Brightening',
    description: 'A practical choice for brightening and daily tone care positioning.',
    moq: 3000,
    status: 'Private Label Available',
    image: 'https://picsum.photos/seed/amp003/800/800'
  },
  {
    id: '4',
    sku: 'AMP004',
    name: 'Peptide Firming Ampoule',
    category: 'Anti-Aging',
    description: 'Firming-focused ampoule for anti-aging and elasticity concepts.',
    moq: 3000,
    status: 'Private Label Available',
    image: 'https://picsum.photos/seed/amp004/800/800'
  }
];

export const FORMULAS: Formula[] = [
  {
    id: 'f1',
    code: 'F-BR-01',
    name: 'Radiance Glow Complex',
    keyIngredients: ['Vitamin C', 'Ferulic Acid', 'Vitamin E'],
    benefits: ['Brightening', 'Antioxidant', 'Collagen Support'],
    texture: 'Watery Liquid',
    targetSkin: 'Dull, Uneven Tone'
  },
  {
    id: 'f2',
    code: 'F-HY-02',
    name: 'Triple HA Moisture Lock',
    keyIngredients: ['Sodium Hyaluronate', 'Panthenol', 'Beta-Glucan'],
    benefits: ['Deep Hydration', 'Soothing', 'Barrier Repair'],
    texture: 'Viscous Gel',
    targetSkin: 'Dry, Dehydrated'
  },
  {
    id: 'f3',
    code: 'F-AN-03',
    name: 'Bakuchiol Age-Defy',
    keyIngredients: ['Bakuchiol', 'Squalane', 'Peptides'],
    benefits: ['Elasticity', 'Wrinkle Care', 'Gentle Renewal'],
    texture: 'Light Oil-Serum',
    targetSkin: 'Aging, Sensitive'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Choose Your Formula',
    description: 'Select from our ready stock ampoules or formula library.'
  },
  {
    step: 2,
    title: 'Confirm Quantity and Label Plan',
    description: 'Share your target quantity, label direction, and inquiry type.'
  },
  {
    step: 3,
    title: 'Move to Supply or ODM',
    description: 'Start with ready stock, then continue with repeat production or ODM expansion.'
  }
];
