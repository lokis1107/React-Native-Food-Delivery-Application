import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { featured } from "../data";
import { themeColors } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Delivery = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation()
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-3xl relative bg-white -mt-12">
        <View className="flex-row items-center justify-between mx-4">
          <View>
            <Text className="text-2xl font-bold text-gray-900 mt-5">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-900">
              20-30 Minutes
            </Text>
            <Text className="text-xl font-bold">Your order is on the way!</Text>
          </View>
          <Image
            source={require("../images/bikeGuy2.gif")}
            className="h-28 w-28 mt-3"
          />
        </View>
        <View
          className="mt-3 p-2 mx-4 rounded-3xl mb-5"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Text className="text-xl text-white text-center font-bold mb-2">
            Order Summary
          </Text>
          <View className="flex-row items-center justify-between">
            <View>
              <Pressable
                className="p-2 ml-14 w-12 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <Ionicons name="call-outline" size={30} color="black" />
              </Pressable>
              <Text className="ml-10 text-lg font-bold">Call The Seller</Text>
            </View>
            <View>
              <Pressable
              onPress={()=> navigation.navigate("Home")}
                className="p-2 mr-20 w-12 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <MaterialCommunityIcons name="cancel" size={33} color="red" />
              </Pressable>
              <Text className="text-lg font-bold">Cancel</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Delivery;
