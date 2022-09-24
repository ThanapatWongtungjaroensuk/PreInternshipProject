import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native';
import ShowGrid from '../component/showGrid';
import AnimeData from '../model/animeData.json'

function HomeScreen() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={[styles.container,{color: colors.background}]}>
      <StatusBar/>
      <View style={styles.headerBar}>
        <Text style={{fontSize: 25, color: colors.text, fontWeight: '500'}}>ToonView</Text>

      </View>
      <ScrollView style={styles.detailscreen}>
        <View style={styles.thumbFrame}>
          <ShowGrid showData={AnimeData}/>
          <ShowGrid showData={AnimeData}/>
          <ShowGrid showData={AnimeData}/>
          <ShowGrid showData={AnimeData}/>
        </View>
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
    backgroundColor: '#232828',
    flexDirection: 'row',
    marginTop: 40,
    padding: 10
  },
  detailscreen: {
    flex: 1,
  },
  thumbFrame: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
});