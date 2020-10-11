import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from "react-native";

const MyButton = (props) => {
    return(
        <TouchableOpacity>
            <View  style={styles.buttonContainer}>
                <Text style ={styles.text}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        padding : 10,
        width : Dimensions.get("window").width * 0.6,
        backgroundColor : "#08175B",
        borderRadius : 10,
        elevation : 30,
        marginTop : 20,
        alignSelf : "center"
    },
    text : {
        fontSize : 30,
        fontWeight : "bold",
        color : "white",
        textAlign : "center"
    }
})

export default MyButton;