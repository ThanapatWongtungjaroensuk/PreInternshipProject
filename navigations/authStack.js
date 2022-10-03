import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoginScreen, AccountScreen, RegisterScreen } from '../screen/index'
import Tabs from './tabs';
import AllNavigator from './allNavigator';

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen  name='Login' component={LoginScreen} />
      <Stack.Screen  name='Register' component={RegisterScreen} />
      <Stack.Screen  name='Root' component={AllNavigator} />
    </Stack.Navigator>
  )
}
//<Stack.Screen  name='LoginPage' component={LoginScreen} />
export default AuthStack