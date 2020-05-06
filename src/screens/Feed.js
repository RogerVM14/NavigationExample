import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Header, ListItem } from 'react-native-elements';

/* Desde el Login estamos enviando un Param mediante navigation
Para recibirlo aquí, debemos usar el prop route, quien trae los params
*/
export default function Feed({ navigation, route }) {

    const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },

    ]

    return (
        <View style={styles.container}>

            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'HOLA MUNDO', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View>
                <ScrollView>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                                bottomDivider
                            />
                        ))
                    }
                </ScrollView>
            </View>

            <View style={styles.body}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Details')} //Hacemos un navigation a uno de los screens que dimos de alta en Main.js 
                    style={{ backgroundColor: "blue", height: 30, width: 100, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 10 }}
                >
                    <Text style={{ color: "white" }}> Ir a detalles!!</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});