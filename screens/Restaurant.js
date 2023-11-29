import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { Feather } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";

const Restaurant = () => {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  return (
    <View>
        <CartIcon />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <View className="relative">
          <Image source={item.image} className="w-full h-72" />
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 mx-2 mt-4 absolute rounded-full"
          >
            <AntDesign name="arrowleft" size={28} color="white" />
          </Pressable>
        </View>
        <View
          style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
          className="bg-white -mt-10 pb-20"
        >
          <Text className="text-2xl font-bold text-gray-900 mx-5 pt-4">
            {item.name}
          </Text>
          <View className="flex-row items-center justify-between mx-5 mt-3 mb-2">
            <Image
              source={require("../images/fullStar.png")}
              className="h-6 w-6"
            />
            <Text className="ml-2 text-lg">{item.reviews} reviews . </Text>
            <Text className="text-lg">{item.category}</Text>
            <View className="flex-row items-center ml-2">
              <Feather name="map-pin" size={22} color="black" />
              <Text style={{ fontSize: 15 }} className="ml-1">
                {item.address}
              </Text>
            </View>
          </View>
          <View className="mb-2 mx-5">
            <Text className="text-xl font-bold text-gray-900">
              {item.description}
            </Text>
          </View>
          <Text className="text-2xl font-bold mt-5 mx-5 text-gray-900">
            Menu
          </Text>
          {/* Dish part */}
          {item.dishes.map((item, index) => {
            return <DishRow key={index} item={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Restaurant;
