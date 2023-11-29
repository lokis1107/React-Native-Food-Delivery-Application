import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import { categories, featured } from "../data";
import FeaturedRow from "../components/featuredrow";

const Home = () => {
  return (
    <SafeAreaView className="pb-2">
      <StatusBar barStyle="light-content" />
      <View className=" flex-row items-center justify-between mx-2">
        <View
          style={{ width: 330 }}
          className="flex-row items-center border p-3 rounded-2xl mt-2 justify-between"
        >
          <View className="flex-row">
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="Search" className="ml-2" />
          </View>

          <View className="flex-row items-center p-1 border-0 border-l-2 border-gray-500">
            <Feather name="map-pin" size={24} color="black" />
            <Text className="ml-2" style={{ fontSize: 17 }}>
              Current Location
            </Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 mt-2 rounded-full"
        >
          <Feather name="menu" size={24} color="white" />
        </View>
      </View>

      {/* Categories */}
      <View>
        <Categories />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 190 }}
      >
        {[featured, featured, featured].map((item, index) => {
          return (
            <FeaturedRow
              key={index}
              title={item.title}
              desc={item.description}
              restaurant={item.restaurants}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
