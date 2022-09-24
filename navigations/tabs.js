import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, Ionicons, MaterialCommunityIcons,Feather } from '@expo/vector-icons';
import { HomeScreen, SettingScreen, NewsScreen} from "../screen/index"

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {

  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor='#FCC900'
      inactiveColor='#808080'
      shifting={true}
      labelStyle={{ fontSize: 12 }}
      //barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: (colorScheme === 'dark' ? '#232828' : '#FFFFFF'),
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarColor: (colorScheme === 'dark' ? '#232828' : '#FFFFFF'),
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: (colorScheme === 'dark' ? '#232828' : '#FFFFFF'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}