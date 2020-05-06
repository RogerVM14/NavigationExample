import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Header, SocialIcon, Tile, Card, Image, Button, Icon } from 'react-native-elements'

/* Desde el Login estamos enviando un Param mediante navigation
Para recibirlo aquí, debemos usar el prop route, quien trae los params
*/
export default function Feed({ navigation, route }) {

    const users = [
        {
            title: 'Ejemplo 1',
            image: 'https://cdn.pixabay.com/photo/2020/05/01/11/26/poppy-5116562__480.jpg'
        },
        {
            title: 'Ejemplo 2',
            image: 'https://cdn.pixabay.com/photo/2020/05/03/07/43/green-5124174__480.jpg'
        },
        {
            title: 'Ejemplo 3',
            image: 'https://cdn.pixabay.com/photo/2020/03/22/15/25/fetch-4957501__480.jpg'
        }

    ]

    return (

        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'HOLA MUNDO', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View>
                <Tile
                    imageSrc={{ uri: "https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645__480.jpg" }}
                    title="Este es un ejemplo de tile"
                    featured
                    caption="Subtitulo"

                />
            </View>

            <ScrollView

            >

                {
                    users.map((Item, Index) => {
                        let image = { uri: `${Item.image}` }
                        return (
                            <Card
                                key={Index}
                                title={Item.title}
                                image={image}>
                                <Text style={{ marginBottom: 10 }}>
                                    Este es un ejemplo para ver que sucede
                             </Text>
                                <Button
                                    onPress={() => alert(`Hola ${Item.title}`)}
                                    icon={<Icon name='code' color='#ffffff' />}
                                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                    title='Ver más' />
                            </Card>
                        )
                    })

                }


                <View
                    style={{ flex:1,justifyContent: "center", alignItems: "center", height:120, backgroundColor:"#fff", 
                    marginLeft:15, marginRight:15, marginTop:10, marginBottom:20}}
                >
                    <TouchableOpacity
                        style={{ backgroundColor: "#110133", height: 50, width: 120,borderRadius:20, justifyContent:"center", alignItems:"center" }}
                        onPress={() => navigation.navigate('MenuTabs')}
                    >
                        <Text style={{ color: "white", fontWeight:"bold" }}> Ir al menu!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>



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
    }
});