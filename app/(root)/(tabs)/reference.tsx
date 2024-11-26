import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Credits } from '@/constants/credits';
import { References } from '@/constants/references'; // Import the references file
import Footer from '@/components/Footer';

export const Reference = () => {
  return (
    <SafeAreaView className="flex-1 bg-green-100">
      <ScrollView className="p-4 bg-green-50 rounded-lg">
        {/* Credits Section */}
        {Credits.map((item) => (
          <View key={item.id} className="p-4 bg-white rounded-lg mt-2 shadow-lg">
            <Text className="text-lg font-bold text-center">{item.title}</Text>
            <Text className="mt-5 text-md text-center text-black">{item.description}</Text>
          </View>
        ))}
        
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
};

export default Reference;
