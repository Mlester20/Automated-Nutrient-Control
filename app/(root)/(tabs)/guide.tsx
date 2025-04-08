import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ingredients, chickens, pigs } from '@/constants';
import Swiper from 'react-native-swiper';
import Footer from '@/components/Footer';

const Guide = () => {
    // Separate states for each livestock category
    const [expandedChickenId, setExpandedChickenId] = useState<number | null>(null);
    const [expandedPigId, setExpandedPigId] = useState<number | null>(null);
    const [expandedFishId, setExpandedFishId] = useState<number | null>(null);

    const toggleExpand = (category: 'chicken' | 'pig' | 'fish', id: number) => {
        if (category === 'chicken') {
            setExpandedChickenId(expandedChickenId === id ? null : id); // Collapse if already expanded
        } else if (category === 'pig') {
            setExpandedPigId(expandedPigId === id ? null : id); // Collapse if already expanded
        } 
    };

    return (
        <ScrollView>
            <SafeAreaView className="flex h-full  bg-white p-4 mb-4 ">
                {/* Header Section */}
                <View className="flex-row items-center justify-between px-4 py-2">
                    <Text className="text-2xl mt-10 font-JakartaBold text-green-800">List of Ingredients</Text>
                </View>

                {/* Swiper Section */}
                <View className="h-[310px] mb-7 p-5 bg-white rounded-lg  shadow-xl shadow-black">
                    <Swiper
                        autoplay={true}
                        autoplayTimeout={4}
                        loop={true}
                        showsPagination={true}
                        dot={
                            <View className="w-[5px] h-[5px] mx-1 bg-black rounded-md" />
                        }
                        activeDot={
                            <View className="w-[5px] h-[5px] mx-1 bg-green-400 rounded-md" />
                        }
                        paginationStyle={{ bottom: 1 }}
                    >
                        {ingredients.map((item) => (
                            <View
                                key={item.id}
                                className="flex flex-row items-center justify-start"
                            >
                                <Image
                                    source={item.image}
                                    className="w-40 h-40 mr-4 rounded-md"
                                    resizeMode="cover"
                                />
                                <View className="flex-1">
                                    <Text className="text-green-700 text-lg font-bold mb-2 ">
                                        {item.title}
                                    </Text>
                                    {/* Dotted List Description */}
                                    <View>
                                        <Text className="text-black text-base mb-1">
                                            ● <Text className="font-bold">Availability:</Text> {item.availability}
                                        </Text>
                                        <Text className="text-black text-base mb-1">
                                            ● <Text className="font-bold">Type/Class:</Text> {item.types}
                                        </Text>
                                        <Text className="text-black text-base">
                                            ● <Text className="font-bold">Source:</Text> {item.source}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </Swiper>
                </View>

                {/* Live Stocks Section */}
                <Text className=" text-2xl font-JakartaBold text-center mb-4 text-green-800">Types of Live Stocks</Text>
                <View className="  p-4 bg-green-600 rounded-lg  shadow-lg shadow-black">
                    <Text className="mt-5 text-2xl font-JakartaBold text-center mb-4 text-white">Chicken Types</Text>
                    {chickens.map((stock) => (
                        <View
                            key={stock.id}
                            className="mb-4 bg-white rounded-lg shadow-md p-4 "
                        >
                            <TouchableOpacity
                                onPress={() => toggleExpand('chicken', stock.id)}
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
                                <Text className="text-green-500 font-bold text-lg">
                                    {expandedChickenId === stock.id ? '-' : '+'}
                                </Text>
                            </TouchableOpacity>

                            {/* Expandable Content */}
                            {expandedChickenId === stock.id && (
                                <View className="mt-4">
                                    <Text className="text-gray-700 text-base">{stock.description}</Text>
                                    
                                    {/* Nutrient Table */}
                                        <View className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
                                            <Text className="text-lg font-bold mb-2">Needed Nutrient Requirements</Text>
                                            <View className="flex-row justify-between border-b border-gray-300 py-2">
                                            <Text className="font-bold">Stage</Text>
                                            <Text className="font-bold">Crude Protein (%)</Text>
                                            </View>
                                        {stock.nutrientValues.map((nutrient, index) => (
                                            <View
                                                key={index}
                                                className="flex-row justify-between py-2 border-b border-gray-300"
                                            >
                                                <Text>{nutrient.stage}</Text>
                                                <Text>{nutrient.crudeProtein}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                <View className="bg-green-600 p-4 mt-4 rounded-b-3xl rounded-t-3xl shadow-lg">
                    <Text className="mt-5 text-2xl font-JakartaBold text-center mb-4 text-white">Pig Types</Text>
                    {pigs.map((stock) => (
                        <View
                            key={stock.id}
                            className="mb-4 bg-white rounded-lg shadow-md p-4"
                        >
                            <TouchableOpacity
                                onPress={() => toggleExpand('pig', stock.id)}
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
                                <Text className="text-green-500 font-bold text-lg">
                                    {expandedPigId === stock.id ? '-' : '+'}
                                </Text>
                            </TouchableOpacity>

                            {/* Expandable Content */}
                            {expandedPigId === stock.id && (
                                <View className="mt-4">
                                    <Text className="text-gray-700 text-base">{stock.description}</Text>
                                    
                                    {/* Nutrient Table */}
                                    <View className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
                                        <Text className="text-lg font-bold mb-2">Needed Nutrient Requirements</Text>
                                        <View className="flex-row justify-between border-b border-gray-300 py-2">
                                            <Text className="font-bold">Stage</Text>
                                            <Text className="font-bold">Crude Protein (%)</Text>
                                        </View>
                                        {stock.nutrientValues.map((nutrient, index) => (
                                            <View
                                                key={index}
                                                className="flex-row justify-between py-2 border-b border-gray-300"
                                            >
                                                <Text>{nutrient.stage}</Text>
                                                <Text>{nutrient.crudeProtein}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            )}
                        </View>
                    ))}
                </View>

                <Footer />
            </SafeAreaView>
        </ScrollView>
    );
};

export default Guide;