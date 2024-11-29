import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ingredients, liveStocks } from '@/constants';
import Swiper from 'react-native-swiper';
import Footer from '@/components/Footer';

const Guide = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id); // Collapse if already expanded
    };

    return (
        <ScrollView>
            <SafeAreaView className="flex h-full">
                {/* Header Section */}
                <View className="flex-row items-center justify-between px-4 py-2">
                    <Text className="text-lg mt-10 font-JakartaBold">List of Ingredients</Text>
                    <TouchableOpacity
                        className="bg-blue-500 mt-5 px-4 py-2 rounded-sm"
                        onPress={() => console.log('Add Ingredients pressed')}
                    >
                        {/* <Text className="text-white font-JakartaBold text-sm">Add Ingredients</Text> */}
                    </TouchableOpacity>
                </View>

                {/* Swiper Section */}
                <View className="h-[300px] mb-6">
                    <Swiper
                        loop={false}
                        dot={<View className="w-[32px] h-[4px] mx-1 bg-gray-400" />}
                        activeDot={null}
                        showsPagination={false}
                    >
                        {ingredients.map((item) => (
                            <View
                                key={item.id}
                                className="flex flex-row items-center justify-center p-5"
                            >
                                <Image
                                    source={item.image}
                                    className="w-40 h-40 mr-4 rounded-md"
                                    resizeMode="cover"
                                />
                                <View className="flex-1">
                                    <Text className="text-black text-lg font-bold mb-2">{item.title}</Text>
                                    <Text className="text-gray-700 text-base">{item.description}</Text>
                                </View>
                            </View>
                        ))}
                    </Swiper>
                </View>

                {/* Live Stocks Section */}
                <View className="p-4">
                    <Text className="text-lg font-JakartaBold text-center mb-4">Types of Live Stocks</Text>

                    {liveStocks.map((stock) => (
                        <View
                            key={stock.id}
                            className="mb-4 bg-white rounded-lg shadow-md p-4"
                        >
                            <TouchableOpacity
                                onPress={() => toggleExpand(stock.id)}
                                className="flex-row items-center justify-between"
                            >
                                <View className="flex-row items-center">
                                    <Image
                                        source={stock.image}
                                        className="w-12 h-12 mr-4 rounded-md"
                                        resizeMode="cover"
                                    />
                                    <Text className="text-black font-bold text-lg">{stock.title}</Text>
                                </View>
                                <Text className="text-blue-500 font-bold text-lg">
                                    {expandedId === stock.id ? '-' : '+'}
                                </Text>
                            </TouchableOpacity>

                            {/* Expandable Content */}
                            {expandedId === stock.id && (
                                <View className="mt-4">
                                    <Text className="text-gray-700 text-base">{stock.description}</Text>
                                    <TouchableOpacity
                                        onPress={() => console.log(`Selected ${stock.title}`)}
                                        className="mt-4 bg-green-500 px-4 py-2 rounded-md items-center"
                                    >
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
                <Footer/>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Guide;
