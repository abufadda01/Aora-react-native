import { StatusBar } from "expo-status-bar";
import { StyleSheet , View , Text, Image , ScrollView } from "react-native";
import { Redirect , router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../globals.css"
import {images} from "../constants"
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";



export default function App(){

    const {loading , isLoggedIn} = useGlobalContext()

    if(!loading && isLoggedIn) return <Redirect href="/home" />


    return(
        <SafeAreaView className="bg-primary h-full"> 
        
            <ScrollView contentContainerStyle={{height : "100%"}}>

                <View className="w-full mt-4 justify-start items-center min-h-[80vh] px-4">
                    
                    <Image className="w-[130px] h-[85px]" resizeMode="contain" source={images.logo}/>
                    <Image className="max-w-[380px] h-[300px] w-full" resizeMode="contain" source={images.cards}/>

                    <View className="relative mt-7">
                        <Text className="text-4xl text-white font-bold text-center font-plight">Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text> </Text>
                        <Image resizeMode="contain" source={images.path} className="w-[137px] h-[15px] absolute -bottom-1 -right-9"/>
                    </View>

                    <Text className="text-md font-plight text-gray-100 text-center mt-8">Where creativity meets innovation embark on a journey of limitless exploration</Text>

                    <CustomButton title="Continue with Email" handlePress={() => router.push("/sign-in")} containerStyles="w-full mt-8" />

                </View>

            </ScrollView>

            <StatusBar backgroundColor="#161622" style="light"/>

        </SafeAreaView>
    ) 
}



// index js will be as the home page the / route
// layout we add the structure that will appears in all pages as navbar of footer and the cuurent rendered page child
// and we add custom layout for custom components in sperated folder this layout will apply to all the files inside this folders