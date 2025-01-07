import React from 'react';
import { View, Text, TextInput } from 'react-native';

interface IngredientQuantityInputProps {
  selectedIngredient: string;
  onQuantityChange: (weight: number) => void;
}

const IngredientQuantityInput: React.FC<IngredientQuantityInputProps> = ({
  selectedIngredient,
  onQuantityChange,
}) => {
  return (
    <View className="flex-row items-center space-x-2 mb-2">
      <Text className="text-green-800 font-medium flex-1">{selectedIngredient}</Text>
      <TextInput
        className="border border-gray-500 rounded-lg p-1 w-[48%] bg-gray-100 ml-6"
        keyboardType="numeric"
        placeholder="Enter weight(kg)"
        onChangeText={(text) => {
          const weight = parseFloat(text) || 0;
          onQuantityChange(weight);
        }}
      />
    </View>
  );
};

export default IngredientQuantityInput;