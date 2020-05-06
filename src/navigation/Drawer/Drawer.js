import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer content</Text>
      <TouchableOpacity>
          <Text> Pedidos realizados </Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function OrderScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export const RootNavigator = () => {
  return (
    <Drawer.Navigator  drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};