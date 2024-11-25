import { StatusBar } from "expo-status-bar";
import { StyleSheet , View , Text } from "react-native";
import { Link } from "expo-router";
import "../globals.css"


export default function App(){
    return(
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Aora</Text>
            <StatusBar style="auto"/>
            <Link className="text-blue-400 underline" href="/profile">profile</Link>
        </View>
    )
}





// index js will be as the home page the / route
// layout we add the structure that will appears in all pages as navbar of footer and the cuurent rendered page child