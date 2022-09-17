import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native';

function HomeScreen() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[styles.container,{color: colors.background}]}>
      <StatusBar/>
      <View style={styles.headerBar}>
        <Text style={{fontSize: 25, color: colors.text, fontWeight: '500'}}>ToonView</Text>
      </View>
      <ScrollView style={styles.detailscreen}>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBar: {
    backgroundColor: 'orange',
    marginTop: 40,
    padding: 10
  },
  detailscreen: {
    flex: 1,
    //backgroundColor: 'black',
  },
});