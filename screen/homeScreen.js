import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import { useTheme } from '@react-navigation/native';

function HomeScreen() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[styles.container, {color: colors.background}]}>
      <StatusBar/>
      <Text style={{fontSize: 25, color: colors.text}}>Home page</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});