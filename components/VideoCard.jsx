import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { Video , ResizeMode } from 'expo-av'


const VideoCard = ({video : {title , thumbnail , video , creator : {username , avatar}}}) => {

    const [play, setplay] = useState(false)


  return (
    <View className="flex-col items-center px-4 mb-16">

        <View className="flex-row items-start gap-3">

            <View className="justify-center items-center flex-row flex-1">

                <View className="w-[46px] h-[46px] rounded-lg justify-center border items-center p-0.5">
                    <Image source={{uri : avatar}} className="rounded-lg w-full h-full" resizeMode='contain'/>
                </View>

                <View className="justify-center flex-1 ml-3 gap-y-1">
                    <Text numberOfLines={1} className="text-white font-psemibold text-sm">{title}</Text>
                    <Text numberOfLines={1} className="text-xs text-gray-100 font-pregular">{username}</Text>
                </View>

            </View>

            <View className="pt-2">
                <Image source={icons.menu} resizeMode='contain' className="w-5 h-5"/>
            </View>

        </View>

        {play 
            ? 
            (
                <Video onPlaybackStatusUpdate={(status) => {if(status.didJustFinish) {setplay(false)}}} source={{uri : video}} className="w-52 h-72 rounded-xl mt-3 bg-white/10" shouldPlay resizeMode={ResizeMode.CONTAIN} />
            ) 
            : 
            (
                <TouchableOpacity onPress={() => setplay(true)} activeOpacity={0.7} className="w-full h-60 rounded-xl mt-3 relative justify-center items-center">
                    <Image source={{uri : thumbnail}} className="w-full h-full rounded-xl mt-3" resizeMode='cover'/>
                    <Image source={icons.play} className="w-16 h-16 bg-black-100 rounded-full p-1 absolute" resizeMode='contain'/>
                </TouchableOpacity>
            )
        }

    </View>
  )
}


export default VideoCard