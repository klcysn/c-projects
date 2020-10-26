import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from "react-native"


const CityItem =(props)=>{
    return(
        <TouchableOpacity style = {styles.container} onPress ={props.onSelect}>
            <Text style = {styles.text}>{props.cityName}</Text>
        </TouchableOpacity>
    )
}

export {CityItem}

const styles = StyleSheet.create({
    container :{
        padding : 15,
        alignItems : "center",
        backgroundColor : "#DA3743"
        
    },
    text : {
        fontSize : 25,
        fontWeight : "300",
        color : "white"
    }
})