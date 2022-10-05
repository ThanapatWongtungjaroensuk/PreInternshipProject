import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,SafeAreaView, ScrollView, TouchableOpacity ,FlatList, Image, Alert, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios';


const ShowItem = ({ item }) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details',{animeID: item.animes_id})}>
        <Image 
            style={styles.showImage}
            source={{uri: item.animes_image}}
        />
    </TouchableOpacity>
  )
}

function ShowThumbnails() {

  const [allAnime, setAllAnime] = useState(null)
    
    useEffect(() => {
      const fetchAnime = async () => {
        const url = `http://192.168.1.102:5000/animes`
        try {
          const response = await axios.get(url)
          setAllAnime(response.data)
        }
        catch(error) {
          console.log(error)
        }
      }
      fetchAnime()
    }, []);

    const renderItem = ({ item }) => (
      <ShowItem item={item}/>
    );
    
    return (
    <FlatList 
        horizontal={true}
        data={allAnime}
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
      borderRadius: 7,
      overflow: 'hidden',
      marginRight: 6
    },
    showImage:{
      width: '100%',
      height: '100%',
    },
  });