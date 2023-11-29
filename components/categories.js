import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../data";

const Categories = () => {
  const [active, setActive] = useState(null);
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {categories.map((item, index) => {
          let isActive = item.id == active;
          let btnClass = isActive ? "bg-gray-800" : "bg-gray-200";
          let textClass = isActive ? "text-gray-900 font-semibold text-lg" : "";
          return (
            <View className="flex items-center justify-center mr-6 mt-3">
              <TouchableOpacity
              onPress={()=> setActive(item.id)}
                className={"rounded-full p-1 bg-gray-200 " + btnClass}
              >
                <Image source={item.image} style={{ height: 45, width: 45 }} />
              </TouchableOpacity>
              <Text className={"text-lg" + textClass}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
