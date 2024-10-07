import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Faq } from '@/constants/Faq';
import { welcome } from '@/constants/welcome'; // Import welcome message

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFaq, setSelectedFaq] = useState<{ id: number; title: string; content: string } | null>(null);

    const openFaqModal = (faq: { id: number; title: string; content: string }) => {
        setSelectedFaq(faq);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedFaq(null);
    };

    return (
        <SafeAreaView className="flex-1 bg-green-50">
            <ScrollView className="p-4">

                {/* Display the welcome message */}
                {welcome.map((item) => (
                    <View key={item.id} className="bg-green-100 p-4 rounded-lg mb-6 shadow-md">
                        <Text className="text-lg font-bold text-center text-green-800">{item.title}</Text>
                        <Text className="text-sm text-center text-green-600 mt-2">{item.description}</Text>
                    </View>
                ))}

                {/* FAQ Section */}
                <Text className="text-md font-JakartaBold mb-6 mt-6 text-center">FAQ</Text>

                <View className="flex flex-row flex-wrap justify-between">
                    {Faq.map(item => (
                        <TouchableOpacity 
                            key={item.id} 
                            className="w-[48%] mb-4 bg-gray-300 p-4 rounded-lg shadow-md"
                            onPress={() => openFaqModal(item)}
                        >
                            <Text className="font-bold text-lg text-center">{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Modal to show FAQ details */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View className="flex-1 justify-center items-center bg-black/60">
                    <View className="bg-white p-6 rounded-lg w-11/12">
                        {selectedFaq && (
                            <>
                                <Text className="font-bold text-lg text-center mb-4">{selectedFaq.title}</Text>
                                <Text className="text-sm text-justify">{selectedFaq.content}</Text>

                                {/* Styled Close Button */}
                                <TouchableOpacity 
                                    onPress={closeModal} 
                                    className="bg-gray-300 mt-4 px-6 py-2 rounded-md self-center"
                                >
                                    <Text className="text-center font-medium">Close</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default Home;
