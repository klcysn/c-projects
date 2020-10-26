import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import {CityList, RestaurantDetail, RestaurantList} from "./pages"

const Stack = createStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown : false}}>
                <Stack.Screen name = "Cities" component ={CityList} />
                <Stack.Screen name = "Restaurants" component ={RestaurantList} />
                <Stack.Screen name = "Details" component ={RestaurantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;