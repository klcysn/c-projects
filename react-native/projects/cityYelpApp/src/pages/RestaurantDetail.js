import React from "react";
import {SafeAreaView, View, Text, Image, StyleSheet, Dimensions, Linking} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";


const RestaurantDetail =(props)=>{
    const {restaurantDetails} = props.route.params
    console.log(restaurantDetails)
    return(
        <SafeAreaView style = {{flex : 1}}>
            <View style = {styles.container}>
                <Text style = {styles.name}>{restaurantDetails.name}</Text>
                <Image style={styles.image}  source = {{uri : restaurantDetails.image_url}}/>
                <View style ={{flexDirection : "row", justifyContent : "space-between"}}>
                    <Text style ={styles.price}>⭐⭐⭐⭐⭐</Text>
                    <Text style ={styles.price}>{"€".repeat(restaurantDetails.price)}</Text>
                </View>
                <TouchableOpacity style ={styles.button}>
                    <Text style={styles.buttonText}>{restaurantDetails.country} / {restaurantDetails.city} / {restaurantDetails.address}</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.button} onPress={()=>Linking.openURL(restaurantDetails.mobile_reserve_url)}>
                    <Text style={styles.buttonText}>Reservation</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetail}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10,
        backgroundColor : "#E8E8E8"
    },
    image : {
        width : Dimensions.get("window").width *0.973,
        height : Dimensions.get("window").height / 3,
        marginVertical : 10
    },
    button : {
        backgroundColor : "#DA3743",
        padding : 10,
        borderRadius : 5,
        marginVertical : 10,


    },
    buttonText:{
        color : "white",
        fontSize : 18,
        fontWeight : "bold"
    },
    price : {
        color : "#ffc400",
        fontSize : 18,
        fontWeight : "bold",
        alignSelf : "flex-end"
    },
    name : {
        fontSize : 30,
        fontWeight : "bold",
        color : "#DA3743"

    }
})