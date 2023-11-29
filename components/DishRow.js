import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { themeColors } from "../theme";

const DishRow = ({ item }) => {
  return (
    <View className="mt-5 mx-5">
      <View className="flex-row items-center bg-white shadow-2xl">
        <Image
          source={item.image}
          style={{ height: 100, width: 100 }}
          className="rounded-2xl"
        />
        <View className="ml-3">
          <Text className="text-xl font-bold text-gray-900">{item.name}</Text>
          <Text>{item.description}</Text>

          <View className="mt-4 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">${item.price}</Text>
            <View className="flex-row items-center ml-28 justify-between">
                <Pressable style={{backgroundColor:themeColors.bgColor(1)}} className="rounded-full w-10 items-center">
                    <Text className="text-4xl font-bold text-white">-</Text>
                </Pressable>
                <Text className="text-xl ml-2 mr-2">0</Text>
                <Pressable style={{backgroundColor:themeColors.bgColor(1)}} className="rounded-full w-10 items-center">
                    <Text className="text-4xl font-bold text-white">+</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
