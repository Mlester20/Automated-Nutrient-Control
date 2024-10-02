import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Guides } from '@/constants/Guides';

const Guide = () => {
    return(
        <SafeAreaView className='flex-1'>
            <ScrollView className='p-4'>
                <Text className='font-JakartaMedium text-lg mb-6 text-center'>Guide & Ingredients</Text>
                    <View className='flex flex-row flex-wrap justify-between'>
                        {Guides.map(item => (
                            <TouchableOpacity
                                key = {item.id}
                                className='w-[48%] mb-4 bg-gray-200 p-4 rounded-lg shadow-md'
                            >
                            <Text className='font-JakartaLight text-md text-center'> {item.title} </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Guide;