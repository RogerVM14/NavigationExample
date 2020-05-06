import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/AuthStack/Login';
import { BottomTabs } from './TabsNavigation';
import { HomeScreen } from '../screens/Home'

const Stack = createStackNavigator();

/* Puntos a tomar en cuenta
    - cuando se crea un Stack, y lo mandamos llamar de otro
    Por default se va a mandar llamar el primer screen del Stack.
    Ejemplo:
    En este Stack tenemos 3 screens, "Feed, Messages y Notifications"
    Si mandamos llamar el Stack desde el Main,
    el primer screen mostrado será Feed, debido a que es el primero
    si cambiamos el orden, quien este al inicio, siempre será el que
    se mostrará.
    Para acceder a alguna de las otras Screen, debemos mandarlas llamar
    directamente con su nombre, "Messages o Notifications"
*/
export const AppNavigation = (props) => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MenuTabs" component={BottomTabs} />
            </Stack.Navigator>
    );
}