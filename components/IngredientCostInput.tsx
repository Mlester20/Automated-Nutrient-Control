import React from 'react';
import { View, Text, TextInput } from 'react-native';

interface IngredientCostInputProps {
  selectedIngredient: string;
  onCostChange: (cost: number) => void;
}

const IngredientCostInput: React.FC<IngredientCostInputProps> = ({
  selectedIngredient,
  onCostChange,
}) => {
  return (
    <View className="flex-row items-center space-x-4 mb-2">
      <Text className="text-green-800 font-medium flex-1">{selectedIngredient}</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-2 w-[50%] bg-gray-100"
        keyboardType="numeric"
        placeholder="Enter cost per kg (PHP)"
        onChangeText={(text) => {
          const cost = parseFloat(text) || 0;
          onCostChange(cost);
        }}
      />
    </View>
  );
};

export default IngredientCostInput;
