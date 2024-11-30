import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from "../components/CustomButton"
import { router } from 'expo-router'


const EmptyState = ({title , subTitle}) => {
  return (
    <View className="justify-center items-center px-4">
        <Image source={images.empty} className="w-[280px] h-[220px]" resizeMode='contain'/>
        <Text className="font-pmedium text-md text-gray-100">{title}</Text>
        <Text className="font-psemibold text-lg mt-1 text-secondary">{subTitle}</Text>
        <CustomButton title="Create new video" handlePress={() => router.push("/create")} containerStyles="w-full my-7"/>    
    </View>
  )
}



export default EmptyState