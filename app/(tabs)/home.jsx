import { View, Text, FlatList, Image, RefreshControlComponent } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../../constants"
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { RefreshControl } from 'react-native'
import { getAllPosts , getLatestPosts } from '../../lib/appwrite'
import useAppwrite from '../../hooks/useAppwrite'
import VideoCard from '../../components/VideoCard'



const Home = () => {

  const {data : posts , refetch , isLoading} = useAppwrite(getAllPosts)
  const {data : latestPosts , refetch : refetchLatestPosts , isLoading : isLoadingLatestPosts} = useAppwrite(getLatestPosts)

  const [refreshing, setrefreshing] = useState(false)


  const onRefresh = async () => {
    setrefreshing(true)
    refetch() // recall , refetch or videos to get latest syned data
    setrefreshing(false)
  }


  
  return (
    <SafeAreaView className="bg-primary border-2 h-full">

      {/* we use FlatList to render a list of elements */}
      <FlatList
        data={posts} // data to render
        keyExtractor={(item) => item?.$id} // a way to extract the key for each rendered item
        renderItem={({item}) => (<VideoCard video={item} />)} // to tell how we want to render each item in the flat list , the shape of each rendered item
        ListHeaderComponent={() => ( // to render a custom header above the flatlist , we add every thing in same FlatList as vertical and horizontal because the scrollview tag dont support both vertical and horizontal at same time 
          <View className="my-6 px-4 space-y-6">

            <View className="justify-between items-start flex-row mb-6">

              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                <Text className="font-psemibold mt-0.5 text-3xl text-secondary">Aora</Text>
              </View>

              <View className="mt-1.5">
                <Image className="w-9 h-10" resizeMode='contain' source={images.logoSmall}/>
              </View>

            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">

              <Text className="text-gray-100 text-lg font-pregular mb-3">Latest Videos</Text>

              <Trending posts={latestPosts} />

            </View>

          </View>
        )}

        ListEmptyComponent={() => ( // to trigger what will happens when our list is empty
          <EmptyState title="No Videos found" subTitle="Be the first one to upload a video"/>
        )}

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} // add RefreshControl built in component in refreshControl faltlist props key to add feature where we can refresh and refetch the data

      /> 

    </SafeAreaView>
  )
}



export default Home