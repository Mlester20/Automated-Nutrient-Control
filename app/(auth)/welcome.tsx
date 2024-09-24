import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';

const OnBoarding = () => {
    return(
        <SafeAreaView className='flex h-full items-center justify-between bg-green-100'>
            <TouchableOpacity onPress={() => {
                router.replace('/(auth)/sign-in');
            }}
                className='w-full flex justify-items-end items-end p-5'
            >
                <Text>Skip</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OnBoarding;