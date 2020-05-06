import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import  Feed  from '../screens/Feed';
import  Messages  from '../screens/Messages';
import  Notifications  from '../screens/Notifications';
import Home from '../screens/Home'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Feed') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }else if(route.name === 'Messages'){
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          else if(route.name === 'Home'){
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={20} color="white" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
      />
    </Tab.Navigator>
  );
};

