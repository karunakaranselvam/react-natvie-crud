/* eslint-disable @typescript-eslint/no-explicit-any */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {About, Contact, Home} from '../screens/Index';
import route from './route';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={route.HOME}
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={route.HOME}
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name={route.ABOUT}
        component={About}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name={route.CONTACT}
        component={Contact}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="gear" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
