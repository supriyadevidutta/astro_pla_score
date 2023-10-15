import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
function Login() {

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-black">
     <StatusBar style="light" />
      <View className=" flex h-full flex-col justify-center items-center bg-black">
        <Image
          source={require("../assets/logo.png")}
          className=" w-auto h-auto mx-0 rounded-lg mt-5"
        />

        <Text className=" text-white mx-2 text-center mt-10 mb-10 text-base">
          MathMoney AI models are specifically designed to analyze massive
          amounts of market data in real-time to identify patterns and
          trends.Combining a set of complex mathematical algorithoms and
          pseudo-scientific techniques,we help users to forecast timing of the
          market.
        </Text>

        <View className=" h-10" />

        <View className=" flex justify-center items-center h-10 w-11/12 rounded-full bg-[#1E90FF]">
          <Text className="text-white">Sign in with email</Text>
        </View>

        <View className=" flex flex-row justify-between h-10 w-11/12 my-5">
          <TouchableOpacity className=" w-auto h-10 rounded-full flex justify-center items-center bg-[#1A1A1A] border-white border" onPress={() => navigation.navigate('Home')}>
            <Text className=" items-center text-white mx-12">Google</Text>
          </TouchableOpacity>

          <View className=" w-auto h-10 rounded-full flex justify-center items-center bg-[#1A1A1A] border-white border">
            <Text className=" items-center text-white mx-12">Apple</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
