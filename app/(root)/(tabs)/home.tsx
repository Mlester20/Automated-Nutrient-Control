import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Faq } from '@/constants/Faq';
import { welcome } from '@/constants/welcome';
import Footer from '@/components/Footer';
import Swiper from 'react-native-swiper';

// Import local images
const healthierAnimals = require('@/assets/images/animal1.jpg');
const healthierAnimals2 = require('@/assets/images/animal2.png');
const ecoFriendly = require('@/assets/images/eco friendly.jpg');
const betterProducts = require('@/assets/images/betterproducts.jpg');
const chemicalFree = require('@/assets/images/chemical free.jpg');
const EnhancedAnimalLifespan = require('@/assets/images/lifespan.jpg');

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
 
    const benefits = [
        { id: '1', image: healthierAnimals, title: 'Healthier Animals' },
        { id: '2', image: healthierAnimals2, title: '' },
        { id: '3', image: ecoFriendly, title: 'Eco-Friendly' },
        { id: '4', image: betterProducts, title: 'Better Products' },
        { id: '5', image: chemicalFree, title: 'Chemical-Free' },
        { id: '6', image: EnhancedAnimalLifespan, title: 'Enhanced Animal Lifespan' },
    ];

    return (
        <ScrollView>
            <SafeAreaView className="flex-1   bg-white">
                <ScrollView className="p-4 space-y-6">          
                    {/* Welcome Section */}
                    <View>
                        {welcome.map((item) => (
                            <View 
                                key={item.id} 
                                className="p-4 rounded-2xl mb-4 border border-green-800 shadow-lg shadow-black bg-white "                           >
                                    <View className="items-center">
                                        <Image
                                            source={require('@/assets/images/logo.png')}
                                            style={{ width: 200, height: 200, borderRadius: 30, }} 
                                            resizeMode="contain"
                                        />
                                    </View>
                                <Text className="text-2xl font-bold text-center text-green-800">{item.title}</Text>
                                <Text className="text-lg text-center text-gray-600 mt-2">{item.description}</Text>
                            </View>
                        ))}
                    </View>

             {/* Image Pagination Section */}
    <View>
        <Text className="text-2xl font-bold mb-4 text-center text-green-800">Benefits of Organic Feed</Text>
            <View style={{ height: 250 }}>
                <Swiper
                    autoplay={true} 
                    autoplayTimeout={4}
                    showsButtons={true} 
                    loop={true} 
                    dotColor="#ccc" 
                    activeDotColor="#4CAF50" 
                    buttonWrapperStyle={{ paddingHorizontal: 10 }}
                    nextButton={<Text style={{ fontSize: 30, color: '#4CAF50' }}>›</Text>}
                    prevButton={<Text style={{ fontSize: 30, color: '#4CAF50' }}>‹</Text>} 
                >
                    {benefits.map((benefit) => (
                        <View key={benefit.id} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={benefit.image}
                                style={{
                                    width: 400,
                                    height: 400,
                                }}
                            />
                                        <View
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            }}
                                        >
                                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
                                    {benefit.title}
                                </Text>
                            </View>
                        </View>
                    ))}
                </Swiper>
            </View>
        </View>


                    {/* FAQ Section */}
                <View>
                    <Text className="text-xl font-bold mb-4 text-center">FAQs</Text>
                        <View className="flex flex-row flex-wrap justify-between">
                            {Faq.map(item => (
                                <TouchableOpacity 
                                    key={item.id} 
                                    className="w-[48%] mb-4 bg-green-200 p-4 rounded-lg shadow-md hover:bg-green-300"
                                    onPress={() => openFaqModal(item)}
                                >
                                    <Text className="font-bold text-center text-green-800">{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>

                {/* FAQ Modal */}
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={closeModal}
                >
                    <View className="flex-1 justify-center items-center bg-black/50">
                        <View className="bg-white p-6 rounded-lg w-11/12 shadow-lg">
                            {selectedFaq && (
                                <>
                                    <Text className="font-bold text-xl text-center mb-4 text-green-800">{selectedFaq.title}</Text>
                                    <Text className="text-sm text-gray-700 text-justify">{selectedFaq.content}</Text>

                                        {/* Close Button */}
                                        <TouchableOpacity 
                                            onPress={closeModal} 
                                            className="bg-green-300 mt-6 px-6 py-2 rounded-md self-center shadow-md hover:bg-green-400"
                                            >
                                            <Text className="text-center font-medium text-green-900">Close</Text>
                                        </TouchableOpacity>
                                     </>
                                 )}
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
            <Footer/>
        </ScrollView>
    );
};

export default Home;
