import React from "react";
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import Data from "./Data"

const News = () => {
    return(
        Data.map((news) =>{
            return(
                
                <TouchableOpacity>
                    <View style = {styles.container}>
                        <Image source ={news.src} style ={styles.image} />
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
        backgroundColor : "#E0E0E0"
    },
    image : {
        width: 390,
        height : 200,
        alignSelf : "center",
        borderRadius : 10
    },
    head : {
        fontWeight : "bold",
        fontSize : 15
    },
    desc : {
        fontSize : 13
    }
})