import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateAccount(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> CreateAccount Screen</Text>
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