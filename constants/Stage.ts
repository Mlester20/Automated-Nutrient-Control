export const Stage = [
  {
    id: 1,
    stage: 'Pre-Starter',
    targetProteinChicken: '21% - 23%',
    targetProteinPig: 'N/A', // No Pre-Starter for Pig
    targetProteinTilapia: 'N/A', // No Pre-Starter for Tilapia
  },
  {
    id: 2,
    stage: 'Starter',
    targetProteinChicken: '19% - 20%',
    targetProteinPig: '18% - 20%',
    targetProteinTilapia: '26% - 27%',
  },
  {
    id: 3,
    stage: 'Grower',
    targetProteinChicken: '18% - 19%',
    targetProteinPig: '15% - 16%',
    targetProteinTilapia: '28% - 29%',
  },
  {
    id: 4,
    stage: 'Finisher',
    targetProteinChicken: '16% - 17%',
    targetProteinPig: '13% - 14%',
    targetProteinTilapia: 'N/A', // Tilapia doesn't have a Finisher stage
  },
];

// Exporting the data for easy access
export const data = [Stage];
