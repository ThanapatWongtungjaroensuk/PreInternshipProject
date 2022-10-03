import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,SafeAreaView, ScrollView,TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { FontAwesome, Ionicons} from '@expo/vector-icons';
import ShowGrid from '../component/showGrid';
import AnimeData from '../model/animeData.json'

function HomeScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation()
  
  return (
    <SafeAreaView style={[styles.container,{color: colors.background}]}>
      <StatusBar/>
      <View style={[styles.headerBar , {color: colors.background}]}>
        <Text style={{fontSize: 25, color:'#FBAA31', fontWeight: '500'}}>ToonView</Text>
        <TouchableOpacity style={{}} onPress={() => navigation.navigate('SearchPage')}>
          <Ionicons name="search" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.detailscreen}>
        <View style={styles.thumbFrame}>
          <ShowGrid showData={AnimeData} title="Top Anime"/>
          <ShowGrid showData={AnimeData} title="New Anime"/>
          <ShowGrid showData={AnimeData} title="All Anime"/>
          <ShowGrid showData={AnimeData} title="The Movie Anime"/>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 45,
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