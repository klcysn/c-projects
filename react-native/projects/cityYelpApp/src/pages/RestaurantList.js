import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {SafeAreaView, View, FlatList, ActivityIndicator} from "react-native"
import { SearchBar, RestaurantItem } from "../components";

let originalList = []
const RestaurantList =(props)=>{
    const [isLoading, setLoading]= useState(true)
    const {selectedCity} = props.route.params
    const [restaurantList, setRestaurantList] = useState([])
    useEffect(()=>{
        fetchRestaurants()
    },[])

    const fetchRestaurants =()=>{
        axios.get("http://opentable.herokuapp.com/api/restaurants", {params:{"city" : selectedCity}})
            .then((response)=>{
                setRestaurantList(response.data.restaurants)
                originalList  =[...response.data.restaurants]
                setLoading(false)
            })
    }
    const renderRestaurants = ({item})=><RestaurantItem restaurant = {item} selectedRestaurant = {()=>props.navigation.navigate("Details",{restaurantDetails: item})} />
    
    function searchRestaurant(search){
        const filteredRestaurants = originalList.filter((restaurant)=>{
            const text  = search.toUpperCase()
            const restaurantName = restaurant.name.toUpperCase()
            return restaurantName.includes(text)
        })
        setRestaurantList(filteredRestaurants)
    }
    return(
        <SafeAreaView style ={{flex : 1}}>
            <View style ={{flex : 1}}>
                <SearchBar placeholder = {"Search a restaurant..."} onSearch ={(search)=>searchRestaurant(search)} />
                
                {isLoading ?
                <View style = {{flex : 1, justifyContent : "center", alignItems : "center"}}>
                    <ActivityIndicator color ="#DA3743" size = {300} />
                </View> 
                 : 
                <FlatList
                data  ={restaurantList}
                renderItem ={renderRestaurants}
                keyExtractor = {(_, index)=>index.toString()}
                />}

            </View>
        </SafeAreaView>
    )
}

export {RestaurantList}