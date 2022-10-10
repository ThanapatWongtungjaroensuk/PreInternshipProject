import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,SafeAreaView, ScrollView,TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { FontAwesome, Ionicons} from '@expo/vector-icons';
import ShowGrid from '../component/showGrid';

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
          <ShowGrid title="Top Anime" id={100}/>
          <ShowGrid title="New Anime" id={200}/>
          <ShowGrid title="School Style" id={2} />
          <ShowGrid title="Action Style" id={8}/>
          <ShowGrid title="Fantasy Style" id={14} />
          <ShowGrid title="Drama Style" id={36} />
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