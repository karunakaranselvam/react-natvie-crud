import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={AuthStack} />
        <Stack.Screen name="Home" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
