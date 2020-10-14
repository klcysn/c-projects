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

const Add = ()=>{
    const [todo,setTodo] = useState([])
    return(
        todo.map((item)=>{
            setInput(" ")
          const clean =()=>{
            const indx = todo.findIndex((x) =>x.id==item.id)
            todo.splice(indx, 1)
            setInput("")
          }
           return(
            <View style ={{flex : 1, flexDirection : "row", alignItems : "center"}}>
              <TouchableOpacity style={{flex : 1}} onPress ={clean}>
                <Text style ={styles.number}>X</Text>
              </TouchableOpacity>
              <Text style={styles.mainText}>{item.input}</Text>
            </View>
            
           )
         })
    )
}



 export default Add;