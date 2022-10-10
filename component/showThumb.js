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

function ShowThumbnails({title,idd}) {
  console.log(idd)
  const [allAnime, setAllAnime] = useState([])
  const [foundAnime, setFoundAnime] = useState([])
    
    useEffect(() => {

      const fetchAnime = async (id) => {
        const url = `http://192.168.1.100:5000/animes`
        try {
          const response = await axios.get(url)
          if(title === 'Top Anime'){
            setFoundAnime(response.data)
            const filtered  = foundAnime.filter(
              foundAnime => foundAnime.animes_score >= 8.5 )
            console.log(filtered)
            setAllAnime(filtered)
          }
          else if(title === 'New Anime'){
            setFoundAnime(response.data)
            const filtered  = foundAnime.filter(
              foundAnime => foundAnime.animes_year === 2022 )
            console.log(filtered)
            setAllAnime(filtered)
          }
          else {
            const url1 = `http://192.168.1.100:5000/tagDetails/anime/${id}`
            const response1 = await axios.get(url1)
            setAllAnime(response1.data)
          }
        }
        catch(error) {
          console.log(error)
        }
      }
      fetchAnime(idd)
    }, [idd]);

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