/* eslint-disable @typescript-eslint/no-explicit-any */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ForgotPassword, Login, Register} from '../screens/Index';
import route from './route';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={route.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={route.LOGIN} component={Login} />
      <Stack.Screen name={route.REGISTER} component={Register} />
      <Stack.Screen name={route.FORGOTPASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
