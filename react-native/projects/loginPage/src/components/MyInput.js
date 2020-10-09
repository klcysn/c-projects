import React from "react";
import {TextInput, StyleSheet} from "react-native";

const MyInput = (props)=>{
    return(
        <TextInput style={styles.input} placeholder = {props.title} secureTextEntry = {props.secure}/>
    )
}


const styles = StyleSheet.create({
    input : {
        width : 380,
        padding : 20,
        backgroundColor : "#ECEFF1",
        fontWeight : "bold",
        fontSize : 15,
        elevation : 30,
        marginTop : 30,
        borderRadius : 15
    }
})

export default MyInput;