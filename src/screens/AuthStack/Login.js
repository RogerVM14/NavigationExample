import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }){

const [user, setUser ] = useState('');
const [pass, setPass ] = useState('');


        return (
          <View style={styles.container}>
          <Text style={styles.inputext}>Sample Login Form</Text>
            <TextInput
              onChangeText={(username) => setUser(username)}
              value={user}
               label='Email'
              style={styles.input}
            />
            <TextInput
              onChangeText={(pass) => setPass(pass)}
              value={pass}
              label='Password'
              secureTextEntry={true}
              style={styles.input}
            />
            
            <Button
              title={'Login'}
              style={styles.input}
              onPress={() => navigation.navigate('Home', { nombre: user})}
            />
          </View>
        )
      }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00FFFF',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
    inputext: {
      width: 200,
      height: 44,
      padding: 10,
      textAlign:'center',
      fontWeight:'bold',
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });