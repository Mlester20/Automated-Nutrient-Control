import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LiveStock } from '@/constants/LiveStock';
import { Stage } from '@/constants/Stage'; 
import { Energy } from '@/constants/energyIngredients';
import { ScrollView } from 'react-native';
import { Protein } from '@/constants/proteinIngredients';
import InputsField from '@/components/Inputs'

const Calculate = () => {
  const [selectedLiveStock, setSelectedLiveStock] = useState<string | undefined>();
  const [selectedStage, setSelectedStage] = useState<string | undefined>();
  const [selectedEnergy1, setSelectedEnergy1] = useState<string | undefined>();
  const [selectedEnergy2, setSelectedEnergy2] = useState<string | undefined>();
  const [selectedProtein1, setSelectedProtein1] = useState<string | undefined>();
  const [selectedProtein2, setSelectedProtein2] = useState<string | undefined>();

  // Function to get the target crude protein for the selected stage
  const getTargetProtein = (stage: string) => {
    const selectedStage = Stage.find(item => item.stage === stage);
    return selectedStage ? selectedStage.targetProtein : 'N/A';
  };

  const [Input, setInput] = useState({
    label: "Input"
  }) 

  // Filter energy ingredients for second picker
  const filteredEnergy = Energy.filter(item => item.title !== selectedEnergy1);
  const filteredProtein = Protein.filter(item=> item.title !== selectedProtein1);

  return (
    <ScrollView>
      <SafeAreaView className='flex-1 bg-gray-100'>
        <View className="p-5">
          <Text className="text-lg font-JakartaMedium mb-3 text-center mt-8 text-gray-500">Select Live Stock & Stage</Text>

          <View className="flex-row justify-between mb-5 mt-5">
            {/* LiveStock Dropdown */}
            <View className="flex-1 border border-gray-300 rounded-lg bg-gray-100 mr-2 p-2">
              <Picker
                selectedValue={selectedLiveStock}
                onValueChange={(itemValue: string) => setSelectedLiveStock(itemValue)}
                style={{ height: 50 }}
              >
                <Picker.Item label="Select LiveStock" value="" />
                {LiveStock.map(item => (
                  <Picker.Item key={item.id} label={item.LiveStockName} value={item.LiveStockName} />
                ))}
              </Picker>
            </View>

            {/* Stage Dropdown */}
            <View className="flex-1 border border-gray-300 rounded-lg bg-gray-100 p-2">
              <Picker
                selectedValue={selectedStage}
                onValueChange={(itemValue: string) => setSelectedStage(itemValue)}
                style={{ height: 50 }}
              >
                <Picker.Item label="Select Stage" value="" />
                {Stage.map(item => (
                  <Picker.Item key={item.id} label={item.stage} value={item.stage} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Display selected values and targeted crude protein */}
          <View className='mt-5'>
            <Text className="text-md mb-1 text-center text-gray-600">
              Selected Live Stock: {selectedLiveStock || 'None'} || Selected Stage: {selectedStage || 'None'}
            </Text>
            {selectedStage && (
              <Text className="text-md text-center text-gray-600">
                Targeted Crude Protein for {selectedStage}: {getTargetProtein(selectedStage)}
              </Text>
            )}
          </View>

          {/* Energy Source Selection (Two Pickers) */}
          <View className='mt-10 px-4'>
            <Text className='text-md font-JakartaMedium text-center mb-2 text-gray-500'>Select Ingredients For Energy Source</Text>
            <View className='flex-row justify-between'>
              {/* First Energy Source Picker */}
              <Picker
                selectedValue={selectedEnergy1}
                onValueChange={(itemValue: string) => {
                  setSelectedEnergy1(itemValue);
                  // Reset second picker if same item is selected in both pickers
                  if (itemValue === selectedEnergy2) setSelectedEnergy2(undefined);
                }}
                style={{ flex: 1, height: 50, marginRight: 10 }}
                className='border border-green-200 rounded-lg bg-gray-100'
              >
                <Picker.Item label='Ingredients' value="" />
                {Energy.map(item => (
                  <Picker.Item key={item.id} label={item.title} value={item.title} />
                ))}
              </Picker>

              {/* Second Energy Source Picker (filtered based on first picker) */}
              <Picker
                selectedValue={selectedEnergy2}
                onValueChange={(itemValue: string) => setSelectedEnergy2(itemValue)}
                style={{ flex: 1, height: 50 }}
                className='border border-green-200 rounded-lg bg-gray-100'
              >
                <Picker.Item label='Ingredients' value="" />
                {filteredEnergy.map(item => (
                  <Picker.Item key={item.id} label={item.title} value={item.title} />
                ))}
              </Picker>
            </View>
          </View>

          <View className='mt-10 px-4'>
            <Text className='text-md font-JakartaMedium text-center mb-2 text-gray-500'>Select Ingredients For Protein Source</Text>
            <View className='flex-row justify-between'>
              {/* First Protein Source Picker */}
              <Picker
                selectedValue={selectedProtein1}
                onValueChange={(itemValue: string) => {
                  setSelectedEnergy1(itemValue);
                  // Reset second picker if same item is selected in both pickers
                  if (itemValue === selectedProtein1) setSelectedProtein1(undefined);
                }}
                style={{ flex: 1, height: 50, marginRight: 10 }}
                className='border border-green-200 rounded-lg bg-gray-100'
              >
                <Picker.Item label='Ingredients' value="" />
                {Protein.map(item => (
                  <Picker.Item key={item.id} label={item.title} value={item.title} />
                ))}
              </Picker>

              {/* Second Energy Source Picker (filtered based on first picker) */}
              <Picker
                selectedValue={selectedProtein2}
                onValueChange={(itemValue: string) => setSelectedProtein2(itemValue)}
                style={{ flex: 1, height: 50 }}
                className='border border-green-200 rounded-lg bg-gray-100'
              >
                <Picker.Item label='Ingredients' value="" />
                {filteredProtein.map(item => (
                  <Picker.Item key={item.id} label={item.title} value={item.title} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Quantity for Every Ingredients */}
          <InputsField
            label='Enter Quantity'
            placeholder='Enter Quantity'
          />

        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Calculate;