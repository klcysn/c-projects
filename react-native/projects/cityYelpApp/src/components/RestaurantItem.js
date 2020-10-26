import React from "react";
import {Text, TouchableOpacity, Image, StyleSheet, Dimensions} from "react-native"

const RestaurantItem = (props)=>{
    return(
        <TouchableOpacity style = {styles.container} onPress ={()=>props.selectedRestaurant()}>
            <Image style={styles.image}  source = {{uri : props.restaurant.image_url}}/>
            <Text style = {styles.name}>{props.restaurant.name}</Text>
        </TouchableOpacity>
    )
}

export {RestaurantItem}

const styles = StyleSheet.create({
image : {
    width : Dimensions.get("window").width * 0.972,
    height : Dimensions.get("window").height / 3
},
name : {
    fontSize : 20,
    fontWeight : "bold",
    alignSelf : "flex-start",
    color : "#DA3743"
},
container : {
    padding : 10,
    margin : 5,
    backgroundColor : "#E8E8E8",
    flex : 1,
    alignItems : "center"
    
}
})