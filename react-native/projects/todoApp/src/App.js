import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';



const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <KeyboardAvoidingView style = {{flex : 1}}>
        <View style ={styles.head}>
          <Text style ={styles.text}>TODO</Text>
          <Text style ={styles.text}>0</Text>
        </View>
        <View  style = {styles.screen}>
          <ScrollView>
            <Text>Yap</Text>
          </ScrollView>
        </View>
        
        <View style = {styles.buttonContainer}>
          <TextInput placeholder = "Write a task!" style={styles.input}/>
          <TouchableOpacity style = {styles.button}>
            <Text style ={{color : "white", fontSize : 30, fontWeight : "bold"}}>ADD TODO</Text>
          </TouchableOpacity>
        </View>
       
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#37474F",
    justifyContent : "space-between"
  },
  text : {
    color : "#FFA726",
    fontWeight : "bold",
    fontSize : 30
  },
  head : {
    height : Dimensions.get("window").height * 0.05,
    flexDirection : "row",
    justifyContent : "space-between",
    margin : 15
  },
  screen : {
    flex :7,
    paddingHorizontal : 20,
    justifyContent :"flex-start"
  },
  button : {
    backgroundColor : "#546E7A",
    width : Dimensions.get("window").width /2,
    borderRadius : 15,
    padding : 10
  },
  buttonContainer : {
    backgroundColor : "#B0BEC5",
    marginHorizontal : 15,
    borderRadius : 15,
    alignItems : "center",
    padding : 25,
    marginBottom : 20,
    height : Dimensions.get("window").height * 0.22
  },
  input : {
    borderWidth : 2,
    width : Dimensions.get("window").width *0.85,
    backgroundColor : "white",
    padding : 15,
    fontSize : 20,
    marginBottom : 10,
    borderColor : "white",
    borderRadius : 15
  }
})

export default App;
