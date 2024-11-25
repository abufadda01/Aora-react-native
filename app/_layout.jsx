import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Text } from 'react-native'

// Slot render the current child route , the cuurent redered component or page on the screen


// const RootLayout = () => {
//   return(
//     <>
//         <Text>header</Text> 
//         <Slot/>
//         <Text>footer</Text> 
//     </>
//   ) 
// }


const RootLayout = () => {
    return(
        <Stack>
            <Stack.Screen name='index' options={{headerShown : false}}/>
        </Stack>
    ) 
  }


export default RootLayout

