import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';

function SearchScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, {color: colors.background}]}>
      <Text style={{fontSize: 25, color: colors.text}}>Search page</Text>
      <StatusBar/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});