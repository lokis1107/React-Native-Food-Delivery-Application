import { View, Text, Pressable } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
  const navigation = useNavigation()
  return (
    <View className="bottom-5 absolute z-50 w-full">
      <Pressable
      onPress={()=> navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="p-3 rounded-full mx-5 flex-row items-center justify-between"
      >
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          className="rounded-full p-1 w-10 items-center"
        >
          <Text className="text-2xl font-bold text-gray-900">3</Text>
        </View>
        <Text className="text-2xl font-bold text-white">View Cart</Text>
        <Text className="text-2xl font-bold text-white">$23</Text>
      </Pressable>
    </View>
  );
};

export default CartIcon;
