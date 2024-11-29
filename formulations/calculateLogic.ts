export function calculateBoneMealSCP(kg: number): number {
  const proteinPercentage = 0.9; // 23% protein content
  return kg * proteinPercentage;
}

export function calculateKangkongProteinSCP(kg: number): number {
  const proteinPercentage = 0.31; // 12% protein content
  return kg * proteinPercentage;
}

export function calculateFishMealSCP(kg: number): number {
  const proteinPercentage = 0.52; // 55% protein content
  return kg * proteinPercentage;
}

export function calculateCopraMealSCP(kg: number): number {
  const proteinPercentage = 0.20; // 20% protein content
  return kg * proteinPercentage;
}

export function calculateSoybeanMealSCP(kg: number): number {
  const proteinPercentage = 0.48; // 48% protein content
  return kg * proteinPercentage;
}

export function calculateSweetPotatoProteinSCP(kg: number): number {
  const proteinPercentage = 0.32; // 5% protein content
  return kg * proteinPercentage;
}

export function calculateIpilIpilLeafMealSCP(kg: number): number {
  const proteinPercentage = 0.25; // 25% protein content
  return kg * proteinPercentage;
}

// Energy Ingredients Functions
export function calculateCornGritsEnergy(kg: number): number {
  const energyPercentage = 0.7; // Assumed energy percentage for Corn Grits
  return kg * energyPercentage;
}

export function calculateSweetPotatoEnergy(kg: number): number {
  const energyPercentage = 0.32; // Assumed energy percentage for Sweet Potato
  return kg * energyPercentage;
}

export function calculateRiceBranEnergy(kg: number): number {
  const energyPercentage = 0.11; // Assumed energy percentage for Rice Bran
  return kg * energyPercentage;
}

export function calculateMolassesEnergy(kg: number): number {
  const energyPercentage = 0.2; // Assumed energy percentage for Molasses
  return kg * energyPercentage;
}

export function calculateRiceMiddlingEnergy(kg: number): number {
  const energyPercentage = 0.9; // Assumed energy percentage for Rice Middling
  return kg * energyPercentage;
}

export function calculateRensoniiEnergy(kg: number): number {
  const energyPercentage = 0.22; // Assumed energy percentage for Rensonii
  return kg * energyPercentage;
}

export function calculateIpilIpilEnergy(kg: number): number {
  const energyPercentage = 0.25; // Assumed energy percentage for Ipil Ipil
  return kg * energyPercentage;
}

export function calculateKakawatiEnergy(kg: number): number {
  const energyPercentage = 0.21; // Assumed energy percentage for Kakawati
  return kg * energyPercentage;
}

export function calculateKangkongEnergy(kg: number): number {
  const energyPercentage = 0.31; // Assumed energy percentage for Kangkong
  return kg * energyPercentage;
}

export function calculateGabiEnergy(kg: number): number {
  const energyPercentage = 0.46; // Assumed energy percentage for Gabi
  return kg * energyPercentage;
}

export function calculateMadreDeAguaEnergy(kg: number): number {
  const energyPercentage = 0.16; // Assumed energy percentage for Madre de Agua
  return kg * energyPercentage;
}

export function calculateIndigoferaEnergy(kg: number): number {
  const energyPercentage = 0.20; // Assumed energy percentage for Indigofera
  return kg * energyPercentage;
}

export function calculateNapierEnergy(kg: number): number {
  const energyPercentage = 0.6; // Assumed energy percentage for Napier
  return kg * energyPercentage;
}

export function calculateManiManihanEnergy(kg: number): number {
  const energyPercentage = 0.20; // Assumed energy percentage for Mani-Manihan
  return kg * energyPercentage;
}
