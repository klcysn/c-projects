import React from "react";
import {TextInput, StyleSheet, Dimensions, Platform} from "react-native";

const MyInput = (props)=>{
    return(
        <TextInput style={styles.input} placeholder = {props.title} secureTextEntry = {props.secure}/>
    )
}


const styles = StyleSheet.create({
    input : {
        width : Dimensions.get("window").width * 0.9,
        padding : Platform.OS=="ios" ? 10 : 20,
        backgroundColor : "#ECEFF1",
        fontWeight : "bold",
        fontSize : 15,
        elevation : 30,
        marginVertical : 10,
        borderRadius : 15
    }
})

export default MyInput;