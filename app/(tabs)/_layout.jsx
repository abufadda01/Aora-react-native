import { View, Text, Image } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import icons from "../../constants/icons"


const TabIcon = ({icon , color , name , focused}) => {
  return (
    <View className="items-center justify-center gap-2 mt-6">
      <Image source={icon} resizeMode='contain' tintColor={color} className="w-5 h-5" />
      <Text style={{color : color}} className={`${focused ? "font-psemibold" : "font-pregular"} text-[9px]`}>{name}</Text>
    </View> 
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel : false , tabBarActiveTintColor : "#FFA001" , tabBarInactiveTintColor : "#CDCDE0" , tabBarStyle : {backgroundColor : "#161622" , borderTopWidth : 2 , borderTopColor : "#232533" , height : 90}}}>
        <Tabs.Screen name='home' options={{title : "Home" , headerShown : false , tabBarIcon : ({color , focused}) => (<TabIcon icon={icons.home} color={color} focused={focused} name="Home" />)}}/>
        <Tabs.Screen name='mark' options={{title : "mark" , headerShown : false , tabBarIcon : ({color , focused}) => (<TabIcon icon={icons.bookmark} color={color} focused={focused} name="mark" />)}}/>
        <Tabs.Screen name='create' options={{title : "Create" , headerShown : false , tabBarIcon : ({color , focused}) => (<TabIcon icon={icons.plus} color={color} focused={focused} name="Add" />)}}/>
        <Tabs.Screen name='profile' options={{title : "Profile" , headerShown : false , tabBarIcon : ({color , focused}) => (<TabIcon icon={icons.profile} color={color} focused={focused} name="Profile" />)}}/>
      </Tabs>
    </>
  )
}

export default TabsLayout