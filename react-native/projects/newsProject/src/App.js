import React from "react";
import {Text, View, SafeAreaView, StyleSheet, ScrollView, TextInput, Linking} from "react-native";
import News from "./component/News"

const App = () => {
  return (
    <SafeAreaView style ={{flex : 1}}>
      <View style = {styles.topSection}>
          <Text style ={styles.header}>News</Text>
          <TextInput placeholder = "Search News..." style = {styles.search} keyboardType = "web-search" onEndEditing = {(text) =>{
            Linking.openURL(`https://news.google.com/search?q=${text}`);
            }}  />
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
    backgroundColor : "white",
    elevation : 20
  },
  topSection : {
    backgroundColor : "#FFFFFF",
    elevation : 20
  }
})

export default App;
