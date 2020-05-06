import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/AuthStack/Login'
import ForgotPasswordScreen from '../screens/AuthStack/ForgotPassword'
import CreateAccountScreen from '../screens/AuthStack/CreateAccount'

const Stack = createStackNavigator();

export const AuthStackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Login" component = {LoginScreen}  options={{headerShown:false}}/>
            <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen} options={{headerShown:false}} />
            <Stack.Screen name = "CreateAccount" component = {CreateAccountScreen}  options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

