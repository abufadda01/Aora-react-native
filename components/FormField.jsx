import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {icons} from "../constants"


const FormField = ({title , value , handleChangeText , otherStyles , keyboardType , placeholder , ...props}) => {

  const [showPassword, setshowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false) 

  return (
    <View className={`space-y-3 ${otherStyles}`}>

      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className={`flex-row w-full border-2 rounded-2xl mt-2 h-16 px-4 items-center ${isFocused ? 'border-secondary-200' : 'border-black-200'} bg-black-100`}>

      <TextInput
        className="flex-1 text-white font-psemibold text-base"
        secureTextEntry={title === "Password" && !showPassword}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        onFocus={() => setIsFocused(true)}  
        onBlur={() => setIsFocused(false)}
      />
        
        {title === "Password" && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image className="w-6 h-6" resizeMode='contain' source={!showPassword ? icons.eye : icons.eyeHide}/>
          </TouchableOpacity>
        )}

      </View>

    </View>
  )
}



export default FormField