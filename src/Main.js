import React from 'react';
import { BottomTabs } from './navigation/TabsNavigation';
import {AppNavigation} from './navigation/AppNavigation';
import {AuthStackNavigator} from  './navigation/AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen  from './screens/Details'
import HomeScreen from './screens/Home'
import FeedScreen from './screens/Feed'



const Stack = createStackNavigator();

export default function Main(){
    return(

        //Siempre debemos de crear solamente un Navigator Container, en las demás partes solo debemos generar el Stack
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name = "Login" component={AuthStackNavigator} options={{headerShown:false}} />
                <Stack.Screen name = "MenuTabs" component ={BottomTabs}  options={{headerShown:false}} />
                <Stack.Screen name = "Home" component ={HomeScreen}  options={{headerShown:false}}  />
                <Stack.Screen name = "Details" component={DetailsScreen} options={{headerShown:false}} />
            </Stack.Navigator>
      
    );
}