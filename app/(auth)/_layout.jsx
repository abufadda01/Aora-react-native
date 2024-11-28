// when we create a folder name with (folder_name) and the folder name itself will not be a route , it trigger that will be a nested route group that allows us to add additional pages , screens inside it with special layout

import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


// Stack we use it to render multi pages

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='sign-in' options={{headerShown : false}}/>
        <Stack.Screen name='sign-up' options={{headerShown : false}}/>
      </Stack>

      <StatusBar backgroundColor='#161622' style='light'/>

    </>
  )
}


export default AuthLayout