import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'



const CustomButton = ({title , handlePress , containerStyles , textStyles , isLoading}) => {
  return (
    <TouchableOpacity disabled={isLoading} onPress={handlePress} activeOpacity={0.6} className={`bg-secondary rounded-xl min-h-[64px] justify-center items-center ${isLoading ? "opacity-50" : ""} ${containerStyles}`}>
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}


export default CustomButton