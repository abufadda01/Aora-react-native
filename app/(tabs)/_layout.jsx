import { View, Text, Image } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import icons from "../../constants/icons"


const TabIcon = ({icon , color , name , focused}) => {
  return (
    <View className="items-center justify-center gap-2 mt-4">
      <Image source={icon} resizeMode='contain' tintColor={color} className="w-6 h-6" />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-[10px]`}>{name}</Text>
    </View> 
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel : false}}>
        <Tabs.Screen name='home' options={{title : "Home" , headerShown : false , tabBarIcon : ({color , focused}) => (<TabIcon icon={icons.home} color={color} focused={focused} name="Home" />)}}/>
      </Tabs>
    </>
  )
}

export default TabsLayout