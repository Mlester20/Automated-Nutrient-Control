// src/utils/calculation.ts

// Assuming this is in a file like `Stage.ts` or inside `constants/Stage.ts`
export const Stage = [
    { id: 1, stage: "Starter", targetProtein: 20 },
    { id: 2, stage: "Grower", targetProtein: 18 },
    { id: 3, stage: "Finisher", targetProtein: 16 },
    // Add more stages as necessary
  ];
  

export interface Ingredient {
    id: number;
    name: string;
    type: 'Protein' | 'Energy';
    cp: number; // Crude Protein Percentage
  }
  
  export const Ingredients: Ingredient[] = [
    { id: 1, name: 'Fish meal', type: 'Protein', cp: 52 },
    { id: 2, name: 'Copra meal', type: 'Protein', cp: 20 },
    { id: 3, name: 'Soybean meal', type: 'Protein', cp: 48 },
    { id: 4, name: 'Ipil-ipil leaf meal', type: 'Protein', cp: 31 },
    { id: 5, name: 'Sweet potato', type: 'Protein', cp: 32 },
    { id: 6, name: 'Rice bran (D1)', type: 'Energy', cp: 11 },
    { id: 7, name: 'Rice middling', type: 'Energy', cp: 9 },
    { id: 8, name: 'Corn grits', type: 'Energy', cp: 7 },
    { id: 9, name: 'Molasses', type: 'Energy', cp: 2 },
    { id: 10, name: 'Madre de agua', type: 'Energy', cp: 16 },
    { id: 11, name: 'Ipil-ipil', type: 'Energy', cp: 25.22 },
    { id: 12, name: 'Indigofera', type: 'Energy', cp: 20 },
    { id: 13, name: 'Rensonii', type: 'Energy', cp: 22.1 },
    { id: 14, name: 'Kakawati', type: 'Energy', cp: 21 },
    { id: 15, name: 'Mani-manihan', type: 'Energy', cp: 25 },
    { id: 16, name: 'Napier', type: 'Energy', cp: 6.7 },
  ];
  
  /**
   * Calculate Crude Protein
   * @param ingredientQuantities - Object with ingredient names and their weights
   * @returns Total Crude Protein percentage
   */
  export const calculateCrudeProtein = (ingredientQuantities: { [key: string]: number }) => {
    let totalCP = 0;
    for (const ingredientName in ingredientQuantities) {
      const weight = ingredientQuantities[ingredientName];
      const ingredient = Ingredients.find((item) => item.name === ingredientName);
      if (ingredient) {
        totalCP += (weight * ingredient.cp) / 100;
      }
    }
    return totalCP.toFixed(2); // Return as string for display
  };
  