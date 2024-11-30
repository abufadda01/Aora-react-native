import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'



const SignUp = () => {

  const {loading , setisLoggedIn , setUser} = useGlobalContext()

  const [form , setForm] = useState({
    username : "" ,
    email : "" ,
    password : ""
  })

  const [isSubmtting, setisSubmtting] = useState(false)


  const submitForm = async (e) => {

    if(!form.username || !form.email || !form.password){
      Alert.alert("Error" , "please fill all fields")
    }

    setisSubmtting(true)

    try {
      
      const resposne = await createUser(form.email , form.password , form.username)
      setUser(resposne)
      setisLoggedIn(true) 

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

        <View className="w-full justify-center min-h-[60vh] px-4 my-8">

          <Image source={images.logo} resizeMode='contain' className="w-[125px] h-[35px]"/>

          <Text className="text-2xl text-white mt-6 font-psemibold">sign up to Aora</Text>

          <FormField title="Username" value={form.username} handleChangeText={(e) => setForm({...form , username : e})} otherStyles="mt-10" />

          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({...form , email : e})} otherStyles="mt-10" keyboardType="email-address" />
          
          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({...form , password : e})} otherStyles="mt-10" />

          <CustomButton title="Register" isLoading={isSubmtting} handlePress={submitForm} containerStyles="mt-10" />  

          <View className="justify-center pt-5 flex-row gap-2 mt-1">

            <Text className="text-lg text-gray-100 font-pregular">Already have an account ?</Text>

            <Link className="text-lg text-secondary font-psemibold" href="/sign-in">Log in</Link>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}



export default SignUp


