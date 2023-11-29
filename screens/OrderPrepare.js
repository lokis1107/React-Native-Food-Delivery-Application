import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPrepare = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate("Delivery")
        },3000)
    }, [])
    
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={require("../images/delivery.gif")} className="h-80 w-80" />
    </View>
  )
}

export default OrderPrepare