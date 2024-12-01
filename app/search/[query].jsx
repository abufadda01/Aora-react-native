import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../../constants"
import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import { searchPosts } from '../../lib/appwrite'
import useAppwrite from '../../hooks/useAppwrite'
import VideoCard from '../../components/VideoCard'



// when we save file name like this [file_name].jsx thats trigger that this file will get a dynamic changable value 
// The dynamic route [file_name].jsx syntax allows the Search page to access the query value through useLocalSearchParams hook

const Search = () => {

  const {query} = useLocalSearchParams()

  const {data : posts , refetch , isLoading} = useAppwrite(() => searchPosts(query)) // because the searchPosts function recive a parameter so we make it as a function not a function call to could pass this parameter

  useEffect(() => {
    refetch()
  } , [query])


  
  return (
    <SafeAreaView className="bg-primary border-2 h-full">

      {/* we use FlatList to render a list of elements */}
      <FlatList
        data={posts} // data to render
        keyExtractor={(item) => item?.$id} // a way to extract the key for each rendered item
        renderItem={({item}) => (<VideoCard video={item} />)} // to tell how we want to render each item in the flat list , the shape of each rendered item
        ListHeaderComponent={() => ( // to render a custom header above the flatlist , we add every thing in same FlatList as vertical and horizontal because the scrollview tag dont support both vertical and horizontal at same time 
          <View className="my-6 px-4">

            <View>

              <Text className="font-pmedium text-sm text-gray-100">Search Results</Text>
              <Text className="font-psemibold mt-0.5 text-3xl text-secondary">{query}</Text>

              <View className="mt-6 mb-8">
                <SearchInput initialQuery={query} />
              </View>


            </View>

          </View>
        )}

        ListEmptyComponent={() => ( // to trigger what will happens when our list is empty
          <EmptyState title="No Videos found" subTitle="No Videos found for this search query"/>
        )}

      /> 

    </SafeAreaView>
  )
}



export default Search