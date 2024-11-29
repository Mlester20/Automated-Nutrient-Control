import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { ingredients } from '@/constants';
import Swiper from 'react-native-swiper';
import { useRef, useState } from 'react';

const Guide = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === ingredients.length - 1;

    return (
        <SafeAreaView className="flex h-full bg-green-100">
            {/* Header Section */}
            <View className="flex-row items-center justify-between px-4 py-2">
                <Text className="text-lg mt-5 font-JakartaBold">
                    List of Ingredients
                </Text>
                <TouchableOpacity
                    className="bg-blue-500 mt-5 px-4 py-2 rounded-sm"
                    onPress={() => console.log('Add Ingredients pressed')}
                >
                    <Text className="text-white font-JakartaBold text-sm">
                        Add Ingredients
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Swiper Section */}
            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-gray-400" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-blue-500 rounded-full" />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {ingredients.map((item) => (
                    <View key={item.id} className="flex flex-row items-center justify-center p-5">
                        {/* Left: Image */}
                        <Image
                            source={item.image}
                            className="w-40 h-40 mr-4 rounded-md"
                            resizeMode="cover"
                        />
                        {/* Right: Text content */}
                        <View className="flex-1">
                            <Text className="text-black text-lg font-bold mb-2">
                                {item.title}
                            </Text>
                            <Text className="text-gray-700 text-base">
                                {item.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </Swiper>

            {/* Footer Section */}
            <View className="p-4">
                <Text className="text-sm text-gray-600 text-center">
                    Slide {activeIndex + 1} of {ingredients.length}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Guide;
