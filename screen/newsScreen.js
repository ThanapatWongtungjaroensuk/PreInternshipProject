import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { Ionicons} from '@expo/vector-icons';
import ShowCardNews from '../component/showCardNews';

function NewsScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, {color: colors.background}]}>
      <StatusBar/>
      <View style={[styles.headerBar , {color: colors.background}]}>
        <Text style={[styles.titleHeader,{color: colors.text}]}>Up Coming</Text>
      </View>
        <View style={styles.detailNew}>
        <ShowCardNews />
      </View>
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 45,
    padding: 10,
    elevation:5
  },
  titleHeader: {
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 10
  },
  detailNew: {
    flex: 1,
  }
});