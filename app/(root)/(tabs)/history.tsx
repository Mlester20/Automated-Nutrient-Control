import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { history as historyData } from '@/constants/history'; // Importing history data

const History = () => {
    return (
        <SafeAreaView className="flex-1 bg-green-50">
            {/* Title Section */}
            <View className="bg-green-600 p-4 rounded-b-3xl shadow-lg">
                <Text className="text-2xl font-JakartaBold text-white text-center">History</Text>
            </View>
            
            {/* Scrollable Content */}
            <ScrollView className="p-4">
                {historyData.map((item) => (
                    <View 
                        key={item.id} 
                        className="bg-white p-6 mb-6 rounded-lg shadow-lg"
                    >
                        <Text className="font-bold text-lg mb-2 text-green-700">{item.title}</Text>
                        <Text className="text-gray-700 mb-4">{item.description}</Text>
                        
                        <View className="flex-row justify-between">
                            <View className="flex-col">
                                <Text className="text-gray-500 text-sm">Date</Text>
                                <Text className="text-gray-800 font-semibold">{item.date}</Text>
                            </View>
                            <View className="flex-col items-end">
                                <Text className="text-gray-500 text-sm">Money Saved</Text>
                                <Text className="text-green-600 font-semibold">{item.moneySaved}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default History;