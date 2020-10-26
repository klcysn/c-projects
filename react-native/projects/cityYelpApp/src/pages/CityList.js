import axios from "axios";
import React, { useEffect, useState } from "react";
import {SafeAreaView, View, Text, FlatList, ActivityIndicator} from "react-native"
import {CityItem, SearchBar} from "../components"

let cityList = []

const CityList =(props)=>{
    const [isLoading, setLoading] = useState(true)
    const [filteredList, setFilteredList] = useState([])
    

    useEffect(()=>{
        fetchCityData()
    },[])


    const fetchCityData = async ()=>{
        const {data} = await axios.get("http://opentable.herokuapp.com/api/cities")
        cityList = [...data.cities]
        setFilteredList(cityList)
        setLoading(false)
    }

    const renderCities = ({item})=> <CityItem cityName = {item} onSelect ={()=>{props.navigation.navigate("Restaurants", {selectedCity : item})}} />
    const renderSeperator =()=><View style ={{borderWidth : 1, borderColor : "#e0e0e0"}} />

    const searchCity = (search)=>{
        const filteredCities = cityList.filter((city)=>{
            const text = search.toUpperCase()
            const cityName = city.toUpperCase()
            return cityName.includes(text)
        })
        setFilteredList(filteredCities)
    }

    return(
        <SafeAreaView style = {{flex : 1}}>
            <View style ={{flex : 1}}>
                <SearchBar placeholder = {"Search a city..."} onSearch = {(search)=>searchCity(search)} />
                {isLoading ? 
                <View style={{flex : 1, flexDirection : "row", alignItems : "center", justifyContent :"center"}}>
                    <ActivityIndicator color ="#DA3743" size = {300} />
                </View>  : <FlatList 
                data = {filteredList}
                renderItem = {renderCities}
                keyExtractor ={(_, index)=>index.toString()}
                ItemSeparatorComponent ={renderSeperator}
                />}
            </View>
        </SafeAreaView>
    )
}

export {CityList}