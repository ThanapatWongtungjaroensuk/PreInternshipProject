import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { AntDesign } from '@expo/vector-icons';

function AllAnimeTypeScreen({route}) {
  const { colors } = useTheme();
  const navigation = useNavigation()
  const TitleName = route.params.typeTitle;

  return (
    <View style={[styles.container, {color: colors.background}]}>
      <StatusBar/>
      <View style={[styles.headerBar , {color: colors.background}]}>
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500', color: colors.text, marginLeft: 30}}>{TitleName}</Text>
      </View>
    </View>
  )
}

export default AllAnimeTypeScreen

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