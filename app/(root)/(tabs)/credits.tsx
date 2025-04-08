import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Credits } from '@/constants'; // Import the credits data
import Footer from '@/components/Footer';

export const Reference = () => {
  return (
    <SafeAreaView className="flex-1 bg-green-100">
      <ScrollView className="p-4">
        {/* Header */}
        <View className="bg-green-600 py-4 rounded-lg mb-4">
          <Text className="text-white text-2xl font-bold text-center">Credits</Text>
        </View>

        {/* Credits Section */}
        <View className="mb-6">
          {Credits.map((item) => (
            <View
              key={item.id}
              className="flex-row items-start p-4 bg-white rounded-lg mb-4 shadow-md"
            >
              {/* Text content */}
              <View className="flex-1">
                <Text className="text-md font-bold text-black">{item.title}</Text>
                <Text className="mt-2 text-md text-gray-700">{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer />
    </SafeAreaView>
  );
};

export default Reference;
