import { View, Text ,TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'


const SearchInput = ({title , value , handleChangeText , otherStyles , keyboardType , placeholder , ...props}) => {

    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setshowPassword] = useState(false)
 

  return (

      <View className={`flex-row w-full space-x-6 border-2 rounded-2xl mt-2 mb-2 h-16 px-4 items-center ${isFocused ? 'border-secondary-200' : 'border-black-200'} bg-black-100`}>

        <TextInput
            className="mt-0.5 text-base text-white flex-1 font-pregular"
            secureTextEntry={title === "Password" && !showPassword}
            value={value}
            placeholder="Search for a video topic"
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            onFocus={() => setIsFocused(true)}  
            onBlur={() => setIsFocused(false)}
        />

        <TouchableOpacity>
            <Image source={icons.search} className="w-5 h-5 ml-2" resizeMode='contain'/>
        </TouchableOpacity>
      
      </View>

  )
}


export default SearchInput