import React from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity, Linking} from "react-native";
import Data from "./Data"

const News = () => {
    return(
        Data.map((news) =>{
            return(
                <TouchableOpacity onPress ={() => {Linking.openURL(news.link)}}>
                    <View style = {styles.container}>
                        <Image source ={{uri : news.src}} style ={styles.image} />
                        <Text style ={styles.head}>{news.head}</Text>
                        <Text style ={styles.desc}>{news.desc}</Text>
                    </View>
                </TouchableOpacity>
            )
            
        })
    )
}

export default News;

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : "flex-start",
        padding : 10,
        margin : 5,
        borderWidth :1,
        borderRadius :10,
        backgroundColor : "#FFFFFF",
        elevation : 20
    },
    image : {
        width: 390,
        height : 200,
        alignSelf : "center",
        borderRadius : 10
    },
    head : {
        fontWeight : "bold",
        fontSize : 15,
        marginBottom : 3,
        marginTop: 3
    },
    desc : {
        fontSize : 13,
        textAlign : "justify"
    }
})