import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'

function SearchScreen() {

  const { colors } = useTheme();
  const navigation = useNavigation()

useEffect(() => {
  navigation.setOptions({
    headerSearchBarOptions: {
      placeholder: "Search"
    },
  })
}, [navigation])


  return (
    <View style={[styles.container, {color: colors.background}]}>
      <StatusBar/>
      <View style={[styles.headerBar , {color: colors.background}]}>
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500', color: colors.text, marginLeft: 30}}>Search</Text>
      </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBar: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 45,
    padding: 10,
    elevation:5
  },
});