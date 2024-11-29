import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Credits } from '@/constants'; // Import the credits data
import Footer from '@/components/Footer';

export const Reference = () => {
  return (
    <SafeAreaView className="flex-1 bg-green-100">
      <ScrollView className="p-4 bg-green-50 rounded-lg">
        {/* Credits Section */}
        {Credits.map((item) => (
          <View key={item.id} className="flex-row items-center justify-between p-4 bg-white rounded-lg mt-2 shadow-lg">
            {/* Left: Image */}
            <Image
              source={item.image}
              className="w-20 h-20 rounded-md mr-4"
              resizeMode="contain"
            />
            {/* Right: Text content */}
            <View className="flex-1">
              <Text className="text-md font-bold text-black">{item.title}</Text>
              <Text className="mt-2 text-md text-black">{item.description}</Text>
              {/* Optional: Link or button for more actions */}
            </View>
          </View>
        ))}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Reference;
