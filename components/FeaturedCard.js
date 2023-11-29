import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FeaturedCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Restaurant", {...item})}>
        <View
          style={{ shadowColor: themeColors.bgColor(0.2), shadowRadius: 7 }}
          className="bg-white mr-4 shadow-xl mt-3 rounded-2xl"
        >
          <Image source={item.image} className="h-36 w-64 rounded-t-3xl" />
          <View className="pb-1 px-3 space-y-2">
            <Text className="text-xl font-bold text-gray-900 mt-1">
              {item.name}
            </Text>
          </View>
          <View className="px-3 pb-1 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image
                className="h-4 w-4"
                source={require("../images/fullStar.png")}
              />
              <Text className="ml-2">{item.reviews} reviews</Text>
            </View>

            <View>
              <Text>{item.category}</Text>
            </View>
          </View>
          <View className="pb-3 px-3 pt-1 flex-row items-center">
            <Feather name="map-pin" size={18} color="black" />
            <Text className="ml-2">Nearby . {item.address}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default FeaturedCard;
