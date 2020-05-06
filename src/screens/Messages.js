import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Header } from 'react-native-elements'

export default function Messages() {

    const [messages, setMesssages] = useState(null);

    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'HOLA MUNDO', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={styles.body}>
                {
                    messages
                        ? <View><Text style={styles.subtitle}> Estos son tus mensajes </Text><Text style={styles.messages}>  {messages} </Text></View>
                        : <Text style={styles.subtitle}> Tu no tienes mensajes hasta ahora</Text>
                }
                <View style={styles.addMessages}>

                    <Text style={{ color: "#000", fontWeight: "bold", bottom: 10 }}>  Agregar Mensajes </Text>
                    <Icon
                        name='plus'
                        type='evilicon'
                        color='#517fa4'
                        size={50}
                        onPress={() => setMesssages('Este es un mensaje nuevo')}
                    />
                </View>

                <View style={[styles.addMessages, styles.customTop]}>

                    <Text style={{ color: "#000", fontWeight: "bold", bottom: 10 }}>  Borrar Mensajes </Text>
                    <Icon
                        name='minus'
                        type='evilicon'
                        color='#517fa4'
                        size={50}
                        onPress={() => setMesssages(null)}
                    />


                </View>


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
    },
    addMessages: {
        justifyContent: "center",
        alignItems: "center",
        top: 30,
        backgroundColor: "#fff",
        height: 130,
        width: 300,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    content: {
        justifyContent: "center",
        alignItems: "center"
    },
    messages: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000",
        alignSelf: "center"

    },
    subtitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000"
    },
    customTop: {
        marginTop: 20
    }
});