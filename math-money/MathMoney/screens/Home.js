import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar'
export const Home = () => {
 
  return (
    <SafeAreaView className=" flex-1 bg-black">
       <StatusBar style="light" />
      <View className=" flex flex-col">
        {/* Top View */}
        <View className=" flex flex-row justify-between mt-5">
          {/* DropDown View */}
          <View className=" w-auto ml-4 px-4 py-2 flex flex-row rounded-lg bg-[#1E90FF] justify-evenly">
            <Text className=" text-white font-normal mr-4">Today</Text>
            <Image source={require("../assets/expand.png")} className=" w-5 h-5"/>
          </View>

          {/* Nifty View */}
          <View className="flex flex-row">
            <View className="bg-[#1A1A1A] rounded justify-center items-center">
              <Text className="items-center text-white px-2 font-bold text-xs ">
                NIFTY 50
              </Text>
            </View>
            <Text className=" text-white text-xs font-light mt-2 ml-1">
              17560.34
            </Text>
            <Image
              source={require("../assets/up.png")}
              className="w-auto h-auto"
            />
            <Text className=" text-white text-xs font-light mt-2 mx-4">
              1.8%
            </Text>
          </View>
        </View>

        <View className="flex justify-center items-center mt-4 mb-1">
          <View className="w-11/12 h-auto bg-[#333333] rounded-sm px-2  py-1">
            <Text className=" text-white font-medium text-base">
              Market Timing Sentiment
            </Text>
            <Text className=" text-white font-light text-xs">
              The Sentiment score of Market and Trader for the day
            </Text>

            <View className=" flex justify-between flex-row">
              {/* Traders */}
              <View className="flex flex-row">
                {/* Taders View */}
                <View className="rounded-full h-6 bg-[#FFAB1E] mx-2 my-3 justify-center">
                  <Text className=" items-center text-center text-white px-5 font-normal text-sm">
                    Traders
                  </Text>
                </View>
                <Text className=" text-white mt-3.5">37%</Text>
              </View>
              {/* Market */}
              <View className="flex flex-row">
                {/* MArket View */}
                <Text className=" text-white mt-3.5">37%</Text>
                <View className="rounded-full h-6 bg-[#4CD964] mx-2 my-3 justify-center">
                  <Text className=" items-center text-center text-white px-5 font-normal text-sm">
                    Market
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className=" w-11/12 h-0.5 bg-[#333333] rounded-full mx-4" />

        <View className=" flex flex-row justify-end items-end mx-21">
          <View className=" flex flex-row">
            <View className="w-2.5 h-2.5 mt-1 rounded-full bg-[#FF2D55]" />
            <Text className="text-white mt-0 mx-2">Fear</Text>
          </View>

          <View className=" flex flex-row mt-1 mx-2">
            <Image
              source={require("../assets/green.png")}
              className="w-2.5 h-2.5 mt-1"
            />
            <Text className="text-white mt-0 mx-2">Greed</Text>
          </View>
        </View>

        {/* Table View */}
        <View className=" mt-3 mx-4 flex-row flex">
        {/* Time */}
          <View className=" flex flex-col">
            <Text className=" text-white mx-2 font-normal text-sm">Time</Text>
            <View className="rounded-md bg-[#333333] py-1">
              <Text className=" text-center text-white text-sm">9:15</Text>
            </View>
          </View>
     <View className=" w-0.5 h-auto bg-[#7F7F7F] rounded-full mt-5 mx-1"/>
     {/* Planet */}
     <View className=" flex flex-col">
            <Text className=" text-white mx-1 font-normal text-sm">Planet</Text>
            <View className="rounded-md bg-[#333333] py-1">
              <Text className=" text-center text-white text-sm">Mo</Text>
            </View>
          </View>
     <View className=" w-0.5 h-auto bg-[#7F7F7F] rounded-full mt-5 mx-1"/>
   {/* S */}
   <View className=" flex flex-col">
            <Text className=" text-white mx-4 font-normal text-sm">S</Text>
            <View className="rounded-md bg-[#333333] px-3 mx-1 py-1">
              <Text className=" text-center text-white text-sm">9</Text>
            </View>
          </View>

     {/* M */}
   <View className=" flex flex-col">
            <Text className=" text-white mx-4 font-normal text-sm">M</Text>
            <View className="rounded-md bg-[#333333] px-3 mx-1 py-1">
              <Text className=" text-center text-white text-sm">9</Text>
            </View>
          </View>
    
{/* XL */}
<View className=" flex flex-col">
            <Text className=" text-white mx-4 font-normal text-sm">XL</Text>
            <View className="rounded-md bg-[#333333]  px-3 mx-1 py-1">
              <Text className=" text-center text-white text-sm">9</Text>
            </View>
          </View>
     <View className=" w-0.5 h-auto bg-[#7F7F7F] rounded-full mt-5 mx-1"/>

     {/* Traders */}
   <View className=" flex flex-col">
            <Text className=" text-white mx-5 font-normal text-sm">Trader</Text>
            <View className="rounded-md bg-[#333333] mt-0 px-0 mx-1 py-1">
              <Text className=" text-center text-white text-sm">9</Text>
            </View>
          </View>
 
        </View>

        <View className=" w-11/12 h-0.5 bg-[#333333] rounded-full mx-4 mt-3" />

        <View className=" w-11/12 h-auto bg-[#1A1A1A] mx-4 my-2 flex flex-row justify-evenly">
        <TextInput className=" px-2 h-5 w-10/12 text-white text-sm text-start pt-1" placeholder="Enter Feedback" placeholderTextColor={'white'}/>
        <View className=" w-auto ml-0 px-1 py-2 flex flex-row rounded-lg bg-[#1E90FF] justify-center items-center">
            <Text className=" text-white font-normal text-xs">Feedback</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};
