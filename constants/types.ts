// types.ts
export type LivestockRange = {
    min: number;
    max: number;
  };
  
  export interface EnergyIngredient {
    id: number;
    title: string;
    pig: LivestockRange;
    chicken: LivestockRange;
    goat: LivestockRange;
    cattle: LivestockRange;
  }
  
  export interface ProteinIngredient {
    id: number;
    title: string;
    pig: LivestockRange;
    chicken: LivestockRange;
  }