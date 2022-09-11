import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';

function NewsScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, {color: colors.background}]}>
      <Text style={{fontSize: 25, color: colors.text}}>News page</Text>
      <StatusBar/>
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});