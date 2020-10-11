import React from "react";
import {Text, View, SafeAreaView, Image, StyleSheet, ScrollView, Keyboard, KeyboardAvoidingView, Dimensions, Platform} from "react-native";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput"

const App = () => {
  return(
    <SafeAreaView style = {styles.container}>
      <KeyboardAvoidingView style = {{flex : 1}} behavior = {Platform.OS == "ios" ? "padding" : null} >
        <ScrollView style ={{flex : 1}} bounces={false}>
          <View style ={{flex : 1}}>
            <Image style = {styles.images} source ={require("./components/images/foto.png")}/>
          </View>
          <View style ={{flex : 4}}>
            <MyInput secure = {false} title ="Pleace Enter Your E-Mail" keyboardType = "email-address"/>
            <MyInput secure = {true} title ="Pleace Enter Your Password" />
            <Text style = {styles.forgot}>Forgot Your Password ?</Text>
            <MyButton name = "Login"/>
            <MyButton name = "Sign In"/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#80CBC4",
    flex : 1,
    alignItems : "center",
    width : Dimensions.get("window").width
  },
  images : {
    resizeMode : "contain",
    width : Dimensions.get("window").width * 0.6,
    height : Dimensions.get("window").height * 0.4,
    alignSelf : "center"
  },
  forgot : {
    alignSelf : "flex-end",
    color : "blue",
    textDecorationLine : "underline",
    
  }
})

export default App;
