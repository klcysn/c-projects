import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
 


const todoList = []
let count = 0;
const App = () => {
const [task, setTask] = useState("")
  const Task = ()=>{
    return(
     todoList.map((item)=>{
       return(
         <View style ={{flex : 1, flexDirection : "row", alignItems : "center"}}>
          <TouchableOpacity style={{flex : 1}} >
          <Text style={{color : "white", fontSize : 20, backgroundColor :"#546E7A", margin : 2, padding : 7, flex : 9}}>{item.task}</Text>
          </TouchableOpacity>
          
         </View>
        
       )
     })
    )
  }

  return (
    <SafeAreaView style = {styles.container}>
      <KeyboardAvoidingView style = {{flex : 1}}>
        <View style ={styles.head}>
          <Text style ={styles.text}>TODO</Text>
          <Text style ={styles.text}>{todoList.length}</Text>
        </View>
        <View  style = {styles.screen}>
          <ScrollView>
            <Task />
          </ScrollView>
        </View>
        
        <View style = {styles.buttonContainer}>
          <TextInput placeholder = "Write a task!" style={styles.input} onChangeText ={(text) =>{setTask(text)}}/>
          <TouchableOpacity style = {styles.button} onPress ={()=>{
            todoList.push({task:task, id:count})
            console.log(task, todoList,count)
            count++
            setTask("")
            }}>
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
    padding : 15
  },
  buttonContainer : {
    backgroundColor : "#B0BEC5",
    marginHorizontal : 15,
    borderRadius : 15,
    alignItems : "center",
    padding : 25,
    marginBottom : 20,
    height : Dimensions.get("window").height * 0.23
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
  },
  completed : {
    flex : 1,
    backgroundColor : "red"
  }
})

export default App;
