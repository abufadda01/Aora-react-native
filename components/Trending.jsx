import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from "react-native-animatable"
import { icons } from '../constants'
import { Video , ResizeMode } from 'expo-av'


const zoomIn = {
  0 : {
    scale : 0.9
  },
  1 : {
    scale : 1.1
  },
}

const zoomOut = {
  0 : {
    scale : 1.1
  },
  1 : {
    scale : 0.9
  },
}


const TrendingItem = ({activeItem , item}) => {

  const [play, setplay] = useState(false)

  return(
    <Animatable.View className="mr-5" duration={500} animation={activeItem === item.$id ? zoomIn : zoomOut}>

      {play 
      ? 
      <Video onPlaybackStatusUpdate={(status) => {if(status.didJustFinish) {setplay(false)}}} source={{uri : item.video}} className="w-52 h-72 rounded-[35px] mt-3 bg-white/10" shouldPlay resizeMode={ResizeMode.CONTAIN} />
      : 
      <TouchableOpacity onPress={() => setplay(true)} activeOpacity={0.7} className="relative justify-center items-center">
        <ImageBackground resizeMode='cover' source={{uri : item.thumbnail}} className="w-52 ml-3 mb-2 h-60 rounded-[40px] my-5 overflow-hidden shadow-lg shadow-black/40"/> 
        <Image source={icons.play} className="w-12 h-12 bg-black-100 rounded-full p-1 absolute" resizeMode='contain'/>
        </TouchableOpacity>}
      
    </Animatable.View>
  )
}



const Trending = ({posts}) => {

  const [activeItem, setactiveItem] = useState(posts[0])

  const viewableItemsChanged = ({viewableItems}) => {
    if(viewableItems.length > 0){
      setactiveItem(viewableItems[0].key)
    }
  }

  return (
    <FlatList 
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <TrendingItem item={item} activeItem={activeItem} />
        )}
        horizontal // to change the side of the view 
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold : 70
        }}
        contentOffset={{x : 200}}
    />
  )
}


export default Trending