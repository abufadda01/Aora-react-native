import { View, Text ,TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import {router, usePathname} from "expo-router"



const SearchInput = ({initialQuery}) => {

    const pathName = usePathname()
    const [isFocused, setIsFocused] = useState(false)
    const [query, setQuery] = useState(initialQuery || "") // to set an initial value for the search input if we already have a search value


    const handleQueryChange = () => {

      if(!query) {
        return Alert.alert("Missing" , "please enter a search query") // If the input is empty, an alert is shown.
      }

      if(pathName.startsWith("/search")){
        router.setParams({query}) // If already on /search/:query Updates the route's query parameter value using router.setParams
      }else{
        router.push(`/search/${query}`) // If on another page: Navigates to /search/:query and pass the query value in the url
      }

    }
 


  return (

      <View className={`flex-row w-full space-x-6 border-2 rounded-2xl mt-2 mb-2 h-16 px-4 items-center ${isFocused ? 'border-secondary-200' : 'border-black-200'} bg-black-100`}>

        <TextInput
            className="mt-0.5 text-base text-white flex-1 font-pregular"
            value={query}
            placeholder="Search for a video topic"
            placeholderTextColor="#CDCDE0"
            onChangeText={(e) => setQuery(e)}
            onFocus={() => setIsFocused(true)}  
            onBlur={() => setIsFocused(false)}
        />

        <TouchableOpacity onPress={handleQueryChange}>
            <Image source={icons.search} className="w-5 h-5 ml-2" resizeMode='contain'/>
        </TouchableOpacity>
      
      </View>

  )
}


export default SearchInput








