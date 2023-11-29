import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { featured } from "../data";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { themeColors } from "../theme";

const Cart = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row items-center">
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 mx-2 mt-4 rounded-full"
          >
            <AntDesign name="arrowleft" size={28} color="white" />
          </Pressable>
          <View>
            <Text className="text-2xl font-bold text-gray-900 ml-20 mt-4">
              Your Cart
            </Text>
            <Text className="text-lg ml-20">{restaurant.name}</Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          <Image
            source={require("../images/bikeGuy.png")}
            style={{ height: 100, width: 100 }}
          />
          <Text className="text-lg font-bold text-gray-900">
            Order Delivery in 20-30 mins
          </Text>
          <Text style={{ color: themeColors.text }} className="text-lg mx-2">
            Change
          </Text>
        </View>
        {restaurant.dishes.map((item, index) => {
          return (
            <View
              key={index}
              className="p-2 mt-4 shadow-xl mx-2 rounded-2xl border"
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-row">
                  <Text
                    className="text-center text-lg mt-3 mr-2"
                    style={{ color: themeColors.text }}
                  >
                    2x
                  </Text>
                  <Image
                    source={item.image}
                    className="h-14 w-14 rounded-full"
                  />
                  <Text className="text-xl font-bold ml-4 mt-3">
                    {item.name}
                  </Text>
                </View>
                <View className="flex-row items-center ">
                  <Text className="text-lg mr-2">${item.price}</Text>
                  <Pressable
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="rounded-full w-10 items-center"
                  >
                    <Text className="text-4xl font-bold text-white">-</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={{backgroundColor:themeColors.bgColor(0.5)}} className="p-6 px-5 rounded-t-3xl">
        <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">Sub Total</Text>
            <Text className="text-lg font-bold text-gray-900">$10</Text>
        </View>
        <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">Delivery Fee</Text>
            <Text className="text-lg font-bold text-gray-900">$2</Text>
        </View>
        <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">Order Total</Text>
            <Text className="text-lg font-bold text-gray-900">$12</Text>
        </View>
        <Pressable onPress={()=>navigation.navigate("Prepare")} style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 rounded-full mt-5 mb-3">
            <Text className="text-center text-2xl text-white">Place Order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
