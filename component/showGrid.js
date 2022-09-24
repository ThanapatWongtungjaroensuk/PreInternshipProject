import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import ShowThumbnails from './showThumb';
import { useTheme } from '@react-navigation/native';


function ShowGrid({ showData }) {

    const { colors } = useTheme();

    return (
    <View style={styles.createGrid}>
        <Text style={[{color: colors.text},styles.createTitle]}>All Anime</Text>
        <View>
            <ShowThumbnails showList={showData}/>
        </View>
    </View>
  )
}

export default ShowGrid

const styles = StyleSheet.create({
    createGrid: {
        width: '100%',
        marginVertical: 8,
        //backgroundColor: 'red'
    },
    createTitle:{
        fontSize: 22,
        paddingHorizontal: 10,
        fontWeight: 'bold',
      },
  });