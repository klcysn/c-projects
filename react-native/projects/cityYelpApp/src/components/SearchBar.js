import React from "react";
import {TextInput, View, StyleSheet} from "react-native"


const SearchBar =(props)=>{
    return(
        <View style = {styles.container}> 
            <TextInput placeholder={props.placeholder} onChangeText={(text)=>props.onSearch(text)}/>
        </View>
    )
}

export {SearchBar}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "white",
        margin : 5,
        padding : 3,
        borderRadius : 5
    },
    input : {

    }
})