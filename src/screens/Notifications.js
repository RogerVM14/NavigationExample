import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Badge, Header } from 'react-native-elements'


export default function Notifications() {
    return (
        <View style={styles.container}>

            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'HOLA MUNDO', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            
            <View style={styles.body} >
                <Avatar
                    rounded
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="large"
                />

                <Badge
                    status="success"
                    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                />
                <Text style={styles.text}> Notifications Screen</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
});