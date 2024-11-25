import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'


const RootLayout = () => {

    // prevent the splash screen from auto hiding before the assest loading completed (to make the loading process and the smooth transition happens after they loaded not before) 
    SplashScreen.preventAutoHideAsync() 

    const [fontsLoaded , error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    })


    useEffect(() => {
        if(error) throw error
        if(fontsLoaded) SplashScreen.hideAsync()  // The splash screen is a placeholder screen displayed while your app is loading. Managing it programmatically ensures a smooth transition once the app is ready.
    } , [fontsLoaded , error])


    if(!fontsLoaded && !error) return null



    return(
        <Stack>
            <Stack.Screen name='index' options={{headerShown : false}}/>
        </Stack>
    ) 
  }



export default RootLayout



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
