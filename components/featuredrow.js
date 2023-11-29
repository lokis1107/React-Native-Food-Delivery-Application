import { View, Text, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import FeaturedCard from "./FeaturedCard";

const FeaturedRow = ({ title, desc, restaurant }) => {
  return (
    <View className="mt-3">
      <View className="mx-3">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xl font-bold text-gray-900">{title}</Text>
            <Text>{desc}</Text>
          </View>
          <View>
            <Text className="text-lg" style={{ color: themeColors.text }}>
              See All
            </Text>
          </View>
        </View>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:10}}>
        {
            restaurant.map((item, index)=>{
                return(
                    <FeaturedCard key={index} item={item} />
                )
            })
        }
       </ScrollView>
      </View>
    </View>
  );
};

export default FeaturedRow;
