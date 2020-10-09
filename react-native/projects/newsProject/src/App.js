import React from "react";
import {Text, View, SafeAreaView, Button, Image, StyleSheet, ScrollView, TextInput} from "react-native";
import News from "./component/News"

const App = () => {
  return (
    <SafeAreaView style ={{flex : 1}}>
      <View style = {styles.topSection}>
          <Text style ={styles.header}>News</Text>
          <TextInput placeholder = "Search News..." style = {styles.search} keyboardType = "web-search"/>
        </View>
      <ScrollView style = {styles.scrol}>
        <News/>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  scrol : {
    flex : 1
  },

  header : {
    fontSize : 30,
    fontWeight : "bold",
    margin : 5
  },
  search :{
    borderWidth : 2,
    borderRadius : 25,
    padding : 10,
    margin :5,
    backgroundColor : "white"
  },
  topSection : {
    backgroundColor : "#e0e0e0"
  }
})

export default App;
