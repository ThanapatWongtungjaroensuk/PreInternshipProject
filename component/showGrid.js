import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import ShowThumbnails from './showThumb';
import { useTheme } from '@react-navigation/native';
import { Entypo} from '@expo/vector-icons';


function ShowGrid({ showData }) {

    const { colors } = useTheme();

    return (
    <View style={styles.createGrid}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={[{color: colors.text},styles.createTitle]}>All Anime</Text>
            <TouchableOpacity style={{marginRight: 15, marginTop: 3}}>
                <Entypo name="chevron-right" size={20} color={colors.text} />
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 3}}>
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
        //backgroundColor: 'red',
        marginLeft: 15
    },
    createTitle:{
        fontSize: 18,
        //paddingHorizontal: 10,
        fontWeight: '500',
      },
  });