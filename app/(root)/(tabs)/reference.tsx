import React from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '@/components/Footer';

export const Reference = () => {
  const references = [
    { title: 'Organic Poultry Rising', source: 'https://ati2.da.gov.ph/ati-car/content/sites/default/files/2022-12/organic_poultry_raising.pdf' },
    { title: 'Philippine National Standard', source: 'https://noap.da.gov.ph/wp-content/uploads/2023/05/Philippine-National-Standard-PNS-1.pdf' },
    { title: 'ATI-Cordillera Organic Farmers Association on PNS', source: 'https://ati2.da.gov.ph/ati-car/content/article/admin/ati-cordillera-provides-technical-assistance-wakal-organic-farmers-association-pns-oa' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 px-4 py-4">
      {/* Header */}
        <View className="bg-green-600 py-4">
          <Text className="text-white text-lg font-bold text-center">Reference</Text>
        </View>

        {/* Introduction */}
        <View className="px-4 py-6 bg-white shadow-sm">
          <Text className="text-base text-gray-600">
            This section provides a collection of reliable references and resources for farmers and agricultural enthusiasts. 
            The references cover topics such as organic feed preparation, nutritional requirements for livestock, and best practices 
            for managing different types of livestock.
          </Text>
        </View>

        {/* Reference List */}
        
          <Text className="text-lg font-semibold mt-4 text-center text-gray-800 mb-4">Useful References:</Text>
          {references.map((ref, index) => (
            <Pressable
              key={index}
              className="bg-white p-4 mb-4 rounded-lg shadow-md"
              onPress={() => console.log(`Clicked on ${ref.title}`)}
            >
              <Text className="text-lg font-semibold text-gray-800">{ref.title}</Text>
              <Text className="text-md text-gray-500 mt-1">{ref.source}</Text>
            </Pressable>
          ))}
        

          {/* Footer */}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reference;
