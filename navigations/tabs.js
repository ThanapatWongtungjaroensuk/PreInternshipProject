import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { HomeScreen, SettingScreen, NewsScreen, SearchScreen} from "../screen/index"

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {

  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor='#FCC900'
      inactiveColor='#808080'
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
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarColor: (colorScheme === 'dark' ? '#232828' : '#FFFFFF'),
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={24} />
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
            <Ionicons name="newspaper-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: (colorScheme === 'dark' ? '#232828' : '#FFFFFF'),
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}