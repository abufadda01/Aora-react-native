import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'



const SignIn = () => {

  const {loading , setisLoggedIn , setUser} = useGlobalContext()

  const [form , setForm] = useState({
    email : "" ,
    password : ""
  })

  const [isSubmtting, setisSubmtting] = useState(false)

  const submitForm = async (e) => {

    if(!form.email || !form.password){
      Alert.alert("Error" , "please fill all fields")
    }

    setisSubmtting(true)

    try {

      signIn(form.email , form.password)
      const res = await getCurrentUser()

      setUser(res)
      setisLoggedIn(true)

      Alert.alert("Success" , "user logged in successfully")
      router.replace("/home")

    } catch (error) {
      console.log(error)
      Alert.alert("Error" , error)
    }finally{
      setisSubmtting(false)
    }

  }


  
  return (
    <SafeAreaView className="bg-primary h-full">

      <ScrollView>

        <View className="w-full justify-center min-h-[70vh] px-4 my-8">

          <Image source={images.logo} resizeMode='contain' className="w-[125px] h-[35px]"/>

          <Text className="text-2xl text-white mt-6 font-psemibold">Log in to Aora</Text>

          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({...form , email : e})} otherStyles="mt-10" keyboardType="email-address" />
          
          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({...form , password : e})} otherStyles="mt-10" />

          <CustomButton title="Log in" isLoading={isSubmtting} handlePress={submitForm} containerStyles="mt-10" />  

          <View className="justify-center pt-5 flex-row gap-2 mt-1">

            <Text className="text-lg text-gray-100 font-pregular">Don't have an account ?</Text>

            <Link className="text-lg text-secondary font-psemibold" href="/sign-up">Register</Link>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}



export default SignIn