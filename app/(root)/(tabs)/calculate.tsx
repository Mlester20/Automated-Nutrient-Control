import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Button, Modal, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LiveStock } from '@/constants/LiveStock';
import { Stage } from '@/constants/Stage';
import { Energy } from '@/constants/energyIngredients';
import { Protein } from '@/constants/proteinIngredients';
import IngredientQuantityInput from '@/components/IngredientQuantityInput';
import Footer from '@/components/Footer';
import { FeedPreparationGuide } from '@/constants/FeedPreparation';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import {
  calculateBoneMealSCP,
  calculateKangkongProteinSCP,
  calculateFishMealSCP,
  calculateCopraMealSCP,
  calculateSoybeanMealSCP,
  calculateSweetPotatoProteinSCP,
  calculateIpilIpilLeafMealSCP,
  calculateCornGritsEnergy,
  calculateRiceBranEnergy,
  calculateMolassesEnergy,
  calculateRiceMiddlingEnergy,
  calculateRensoniiEnergy,
  calculateKakawatiEnergy,
  calculateGabiEnergy,
  calculateMadreDeAguaEnergy,
  calculateIndigoferaEnergy,
  calculateNapierEnergy,
  calculateManiManihanEnergy
} from '@/formulations/calculateLogic';

const Calculate = () => {
  const [selectedLiveStock, setSelectedLiveStock] = useState<string | undefined>();
  const [selectedStage, setSelectedStage] = useState<string | undefined>();
  const [selectedEnergy1, setSelectedEnergy1] = useState<string | undefined>();
  const [selectedEnergy2, setSelectedEnergy2] = useState<string | undefined>();
  const [selectedProtein1, setSelectedProtein1] = useState<string | undefined>();
  const [selectedProtein2, setSelectedProtein2] = useState<string | undefined>();
  const [ingredientQuantities, setIngredientQuantities] = useState<{ [key: string]: number }>({});

  // Function to get the target crude protein for the selected stage
  const getTargetProtein = (stage: string) => {
    const selectedStage = Stage.find((item) => item.stage === stage);
    return selectedStage ? selectedStage.targetProtein : 'N/A';
  };

  // Filter energy and protein ingredients for the second picker
  const filteredEnergy = Energy.filter((item) => item.title !== selectedEnergy1);
  const filteredProtein = Protein.filter((item) => item.title !== selectedProtein1);

  // Handle quantity changes
  const handleQuantityChange = (ingredient: string, weight: number) => {
    setIngredientQuantities((prev) => ({ ...prev, [ingredient]: weight }));
  };

  // Dynamic function to calculate the crude protein based on the selected ingredient
  const calculateIngredientCrudeProtein = (ingredient: string, weight: number) => {
    switch (ingredient) {
        case 'Bone Meal':
            return calculateBoneMealSCP(weight);
        case 'Kangkong':
            return calculateKangkongProteinSCP(weight);
        case 'Fish Meal':
            return calculateFishMealSCP(weight);
        case 'Copra Meal':
            return calculateCopraMealSCP(weight);
        case 'Soybean Meal':
            return calculateSoybeanMealSCP(weight);
        case 'Sweet Potato':
            return calculateSweetPotatoProteinSCP(weight);
        case 'Ipil Ipil Leaf Meal':
            return calculateIpilIpilLeafMealSCP(weight);
        case 'Corn Grits':
            return calculateCornGritsEnergy(weight); //energy calculation
        case 'Rice Bran':
            return calculateRiceBranEnergy(weight);
        case 'Molasses':
            return calculateMolassesEnergy(weight);
        case 'Rice Middling':
            return calculateRiceMiddlingEnergy(weight);
        case 'Rensonii':
            return calculateRensoniiEnergy(weight);
        case 'Kakawati':
            return calculateKakawatiEnergy(weight);
        case 'Gabi':
            return calculateGabiEnergy(weight);
        case 'Madre De Agua':
            return calculateMadreDeAguaEnergy(weight);
        case 'Indigofera':
            return calculateIndigoferaEnergy(weight);
        case 'Napier':
            return calculateNapierEnergy(weight);
        case 'Mani Manihan':
            return calculateManiManihanEnergy(weight);
        default:
            return 0; // Default value if the'res no match in Ingredients
    }
};

  //function for displaying organic kg and water intake of live stock and stage
  const LivestockData = () => {
    const stageData = Stage.find((item) => item.stage === selectedStage);
  
    if (stageData) {
      return {
        waterIntake: stageData.waterIntake,
        feedIntakeRange: stageData.feedIntakeRange, // Using feedIntakeRange
        morningFeed: stageData.morningFeed,
        afternoonFeed: stageData.afternoonFeed,
        eveningFeed: stageData.eveningFeed,
        targetProtein: stageData.targetProtein,
      };
    }
  
    return {
      waterIntake: "N/A",
      feedIntakeRange: "N/A", // Default value
      morningFeed: "N/A",
      afternoonFeed: "N/A",
      eveningFeed: "N/A",
      targetProtein: "N/A",
    };
  };
  
  
  

  // Calculate total crude protein
  const calculateCrudeProtein = () => {
    let totalProtein = 0;
    let totalWeight = 0;
    for (const ingredient in ingredientQuantities) {
      const weight = ingredientQuantities[ingredient];
      totalProtein += calculateIngredientCrudeProtein(ingredient, weight);
    }
    return totalProtein.toFixed(2);
  };

  const checkCrudeProtein = () => {
    const totalProtein = parseFloat(calculateCrudeProtein());
  
    // Find the selected stage's protein range
    const selectedStageData = Stage.find((item) => item.stage === selectedStage);
  
    if (!selectedStageData) {
      return `Invalid stage selected. Please select a valid stage.`;
    }
  
    // Parse the targetProtein range (e.g., "18-20%" to { min: 18, max: 20 })
    const [min, max] = selectedStageData.targetProtein
      .replace('%', '') // Remove the percentage sign
      .split('-') // Split into min and max values
      .map(Number); // Convert to numbers
  
    // Check if the total protein is within the range
    if (totalProtein < min) {
      return `The total crude protein (${totalProtein}%) is below the targeted crude protein range (${min}% - ${max}%). Please consider increasing the quantity of one or more ingredients.`;
    } else if (totalProtein > max) {
      return `The total crude protein (${totalProtein}%) is higher than the targeted crude protein range (${min}% - ${max}%). Please consider lowering the quantity of one or more ingredients.`;
    }
    // If it's within the range
    return `The total crude protein (${totalProtein}%) meets the targeted crude protein range (${min}% - ${max}%).`;
  };
  

  //function to reset all the selection
  const resetSelections = () => {
    setSelectedLiveStock(undefined);
    setSelectedStage(undefined);
    setSelectedEnergy1(undefined);
    setSelectedEnergy2(undefined);
    setSelectedProtein1(undefined);
    setSelectedProtein2(undefined);
    setIngredientQuantities({});
    Alert.alert("Reset", "All selections have been cleared.");
  };
  

  return (
    <ScrollView className="flex-1 mt-10 bg-green-50 p-5 w-full h-[100%]">
      <SafeAreaView>
        <View className="p-5 bg-white rounded-lg">
          <Text className="text-lg font-JakartaMedium mb-3 text-center mt-8 text-green-800 shadow-md">
            Select Live Stock & Stage
          </Text>

          {/* Livestock and Stage Dropdowns */}
          <View className="flex-row justify-between mb-5 mt-5">
            <View className="flex-1 border border-green-300 rounded-lg bg-gray-100 mr-2 p-2 shadow-sm">
              <Picker
                selectedValue={selectedLiveStock}
                onValueChange={(itemValue: string) => setSelectedLiveStock(itemValue)}
                style={{ height: 50 }}
              >
                <Picker.Item label="Select LiveStock" value="" />
                {LiveStock.map((item) => (
                  <Picker.Item key={item.id} label={item.LiveStockName} value={item.LiveStockName} />
                ))}
              </Picker>
            </View>

            <View className="flex-1 border border-green-300 rounded-lg bg-gray-100 p-2">
              <Picker
                selectedValue={selectedStage}
                onValueChange={(itemValue: string) => setSelectedStage(itemValue)}
                style={{ height: 50 }}
              >
                <Picker.Item label="Select Stage" value="" />
                {Stage.map((item) => (
                  <Picker.Item key={item.id} label={item.stage} value={item.stage} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Display Target Protein */}
          {selectedStage && (
            <Text className="text-md text-center text-gray-600">
              Targeted Crude Protein for {selectedStage}: {getTargetProtein(selectedStage)}
            </Text>
          )}

          {/* Energy Source Selection */}
          <View className="mt-10 px-4">
            <Text className="text-md font-JakartaMedium text-center mb-2 text-green-800">
              Select Ingredients For Energy Source
            </Text>
            <View className="flex-wrap flex-row justify-between">
              <View className="w-[48%] mb-4">
                <Picker
                  selectedValue={selectedEnergy1}
                  onValueChange={(itemValue: string) => {
                    setSelectedEnergy1(itemValue);
                    if (itemValue === selectedEnergy2) setSelectedEnergy2(undefined);
                  }}
                  style={{ height: 50 }}
                  className="border border-green-200 rounded-lg bg-gray-100"
                >
                  <Picker.Item label="Ingredients" value="" />
                  {Energy.map((item) => (
                    <Picker.Item key={item.id} label={item.title} value={item.title} />
                  ))}
                </Picker>
              </View>

              <View className="w-[48%] mb-4">
                <Picker
                  selectedValue={selectedEnergy2}
                  onValueChange={(itemValue: string) => setSelectedEnergy2(itemValue)}
                  style={{ height: 50 }}
                  className="border border-green-200 rounded-lg bg-gray-100"
                >
                  <Picker.Item label="Ingredients" value="" />
                  {filteredEnergy.map((item) => (
                    <Picker.Item key={item.id} label={item.title} value={item.title} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          {/* Protein Source Selection */}
          <View className="mt-10 px-4">
            <Text className="text-md font-JakartaMedium text-center mb-2 text-green-800">
              Select Ingredients For Protein Source
            </Text>
            <View className="flex-wrap flex-row justify-between">
              <View className="w-[48%] mb-4">
                <Picker
                  selectedValue={selectedProtein1}
                  onValueChange={(itemValue: string) => {
                    setSelectedProtein1(itemValue);
                    if (itemValue === selectedProtein2) setSelectedProtein2(undefined);
                  }}
                  style={{ height: 50 }}
                  className="border border-green-200 rounded-lg bg-gray-100"
                >
                  <Picker.Item label="Ingredients" value="" />
                  {Protein.map((item) => (
                    <Picker.Item key={item.id} label={item.title} value={item.title} />
                  ))}
                </Picker>
              </View>

              <View className="w-[48%] mb-4">
                <Picker
                  selectedValue={selectedProtein2}
                  onValueChange={(itemValue: string) => setSelectedProtein2(itemValue)}
                  style={{ height: 50 }}
                  className="border border-green-200 rounded-lg bg-gray-100"
                >
                  <Picker.Item label="Ingredients" value="" />
                  {filteredProtein.map((item) => (
                    <Picker.Item key={item.id} label={item.title} value={item.title} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          <View className="mt-10 px-4">
            <Text className="text-md font-JakartaMedium text-center mb-2 text-green-800">
              Enter Quantity for Selected Ingredients
            </Text>
            <View className="flex-wrap flex-row justify-between">
              {[selectedEnergy1, selectedEnergy2, selectedProtein1, selectedProtein2]
                .filter(Boolean)
                .map((ingredient) => (
                  <View key={ingredient} className="w-[48%] mb-4">
                    <IngredientQuantityInput
                      selectedIngredient={ingredient!}
                      onQuantityChange={(weight) => handleQuantityChange(ingredient!, weight)}
                    />
                  </View>
                ))}
            </View>
          </View>

          {/* Display Shared Crude Protein and Total Average */}
          {Object.keys(ingredientQuantities).length > 0 && (
            <View className="mt-8 px-4 py-4 bg-blue-100 rounded-md shadow-lg">
              <Text className="text-lg font-JakartaMedium text-green-800 mb-4 text-center">
                Shared Crude Protein per Ingredient
              </Text>
              <View>
                {Object.entries(ingredientQuantities).map(([ingredient, weight]) => {
                  // Get the crude protein per ingredient based on its weight
                  const sharedCrudeProtein = calculateIngredientCrudeProtein(ingredient, weight);

                  return (
                    <View key={ingredient} className="flex-row justify-between mb-2">
                      <Text className="text-md font-JakartaMedium text-gray-600">{ingredient}:</Text>
                      <Text className="text-md font-JakartaMedium text-gray-800">
                        {weight}kg - {sharedCrudeProtein.toFixed(2)}% {/* No need to show division */}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View className="mt-4 border-t border-gray-300 pt-4">
                {/* Display Total Weight */}
                <Text className="text-md font-JakartaMedium text-center text-gray-800">
                  Total Weight: {Object.values(ingredientQuantities).reduce((sum, weight) => sum + weight, 0)} kg
                </Text>

                {/* Display Total Average Shared Crude Protein */}
                <Text className="text-md font-JakartaMedium text-center text-gray-800 mb-5">
                  Total Average Shared Crude Protein: {(() => {
                    const totalWeight = Object.values(ingredientQuantities).reduce((sum, weight) => sum + weight, 0);
                    const totalSharedCrudeProtein = Object.entries(ingredientQuantities).reduce(
                      (totalCrudeProtein, [ingredient, weight]) =>
                        totalCrudeProtein + calculateIngredientCrudeProtein(ingredient, weight),
                      0
                    );

                    const averageCrudeProtein = totalWeight === 0 ? 0 : (totalSharedCrudeProtein);
                    return averageCrudeProtein.toFixed(2); // Ensure proper formatting
                  })()}%
                </Text>
              </View>

              <Text>{checkCrudeProtein()}</Text>
            </View>
          )}

          <View className="flex-1 justify-center items-center p-4">
            <View className="flex-row space-x-4">
              {/* Calculate Button */}
                <TouchableOpacity
                  onPress={() => {
                    if (selectedLiveStock && selectedStage) {
                      const {
                        waterIntake,
                        feedIntakeRange,
                        morningFeed,
                        afternoonFeed,
                        eveningFeed
                      } = LivestockData();

                      Alert.alert(
                        "Guide",
                        `Results for ${selectedLiveStock}:\n\n` +
                          `Stage: ${selectedStage}\n` +
                          `Water Intake: ${waterIntake}\n` +
                          `Feed Intake: ${feedIntakeRange} (Daily)\n` +
                          `Morning: ${morningFeed}\n` +
                          `Afternoon: ${afternoonFeed}\n` +
                          `Evening: ${eveningFeed}\n\n` +
                          FeedPreparationGuide
                      );
                    } else {
                      Alert.alert("Error", "Please select both livestock and stage.");
                    }
                  }}
                  className="mt-6 px-4 py-2 bg-blue-500 rounded"
                >
                <Text className="text-white font-medium">View Guide</Text>
              </TouchableOpacity>    



              {/* Reset Button */}
              <TouchableOpacity
                onPress={resetSelections}
                className="mt-6 px-4 py-2 bg-red-500 rounded"
              >
                <Text className="text-white font-medium">RESET</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </SafeAreaView>
      <Footer/>
    </ScrollView>
  );
};

export default Calculate;