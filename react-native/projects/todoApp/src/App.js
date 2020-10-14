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
  KeyboardAvoidingView
} from 'react-native';
 




const App = () => {
  const [todo,setTodo] = useState([])
  const [input, setInput] = useState("")
  const [maximum, setMaximum] = useState(0)
  const time = Date().split(" ").slice(0, 5).join(" - ")
  const Task = ()=>{
    return(
      todo.map((item)=>{
      const clean =()=>{
        const indx = todo.findIndex((x) =>x.id==item.id)
        todo.splice(indx, 1)
        setInput("")
      }
      
       return(
        <View style ={{flex : 1, flexDirection : "row", alignItems : "center"}}>
          <TouchableOpacity style={{flex : 2}} onPress ={clean} onPressIn ={()=>{setInput(" ")}}>
            <Text style ={styles.number}>X</Text>
          </TouchableOpacity>
          <View style={styles.mainTextContainer}>
            <Text style={styles.mainText}>{item.input}</Text>
            <Text style ={styles.time}>{item.time}</Text>
          </View>
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
          <Text style ={styles.text}>{todo.length}</Text>
        </View>
        <View  style = {styles.screen}>
          <ScrollView>
            <Task />
          </ScrollView>
        </View>
        
        <View style = {styles.buttonContainer}>
          <TextInput placeholder = "Write a task!" value={input} style={styles.input} onChangeText ={(text) =>{setInput(text)}}/>
          <TouchableOpacity style = {styles.button} onPress ={()=>{
            setTodo([...todo,{input:input, id:maximum, time:time}])
            setMaximum(maximum + 1)
            setInput("")
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
  number : {
    color : "white",
    fontSize : 20,
    backgroundColor :"#546E7A",
    padding : 13,
    textAlign : "center"
  },
  mainText : {color : "white",
    fontSize : 20,
    padding : 3,
    
  },
  mainTextContainer : {
    backgroundColor :"#546E7A",
    margin : 2,
    flex : 9,
    paddingLeft : 5
    
  },
  time : {
    color : "#FFA726"
  }
})

export default App;
