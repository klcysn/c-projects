import React from "react";
import {Text, View, SafeAreaView, Image, StyleSheet} from "react-native";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput"

const App = () => {
  return(
    <SafeAreaView style = {styles.container}>
      <View style ={{flex : 1}}>
        <Image style = {styles.images} source ={require("./components/images/foto.png")}/>
      </View>
      <View style ={{flex : 4, alignItems :"center", justifyContent : "center"}}>
        <MyInput secure = {false} title ="Pleace Enter Your E-Mail" keyboardType = "email-address"/>
        <MyInput secure = {true} title ="Pleace Enter Your Password" />
        <Text style = {styles.forgot}>Forgot Your Password ?</Text>
        <MyButton name = "Login"/>
        <MyButton name = "Sign In"/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#80CBC4",
    alignItems : "center",
    flex : 1,
    alignItems : "center",
    justifyContent : "flex-start",
    padding : 50
  },
  images : {
    width : 200,
    height : 150,
  },
  forgot : {
    alignSelf : "flex-end",
    color : "blue",
    textDecorationLine : "underline",
    
  }
})

export default App;
