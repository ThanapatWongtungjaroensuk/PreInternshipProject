import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,SafeAreaView, ScrollView, TouchableOpacity ,FlatList, Image } from 'react-native'


const ShowItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
        <Image 
            style={styles.showImage}
            source={{uri: item.image}}
        />
    </TouchableOpacity>
);

function ShowThumbnails({ showList }) {

    const renderItem = ({ item }) => (
        <ShowItem item={item}/>
    );

    return (
    <FlatList 
        horizontal={true}
        data={showList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />
  )
}

export default ShowThumbnails

const styles = StyleSheet.create({
    item:{
      width: 110,
      height: 150,
      borderRadius: 5,
      overflow: 'hidden',
      marginHorizontal: 3
    },
    showImage:{
      width: '100%',
      height: '100%',
    },
  });