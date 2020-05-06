import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {RootNavigator} from '../navigation/Drawer/Drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Details({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Details Screen</Text>
            <TouchableOpacity
            style={{backgroundColor:"blue", height:30, width:150, justifyContent:"center", alignItems:"center", borderRadius:10, marginTop:10}}
            onPress={() => navigation.goBack()}
            >
                <Text style={{color:"white"}}> Regresar al menú!</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
});