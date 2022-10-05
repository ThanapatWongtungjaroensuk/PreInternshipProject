import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';
import axios from 'axios';


const ShowItem = ({ item }) => {
    
    return (
      <View style={styles.card}>
        <View style={styles.date}>
            <Text>{item.news_date}</Text>
            <Text>{item.news_date}</Text>
        </View>
            <Image 
                style={styles.showImage}
                source={{uri: item.news_wallpaper}}
            />
      </View>
    )
  }

function ShowCardNews() {

    const [allNews, setAllNews] = useState(null)

    useEffect(() => {
        const fetchNews = async () => {
          const url = `http://192.168.1.102:5000/news`
          try {
            const response = await axios.get(url)
            setAllNews(response.data)
          }
          catch(error) {
            Alert.alert('Error fetch News data')
          }
        }
        fetchNews()
      }, []);
  
      const renderItem = ({ item }) => (
        <ShowItem item={item}/>
      );

  return (
    <FlatList 
        horizontal={false}
        data={allNews}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />
  )
}

export default ShowCardNews

const styles = StyleSheet.create({
    item:{
      width: 110,
      height: 150,
      borderRadius: 7,
      overflow: 'hidden',
      marginRight: 6
    },
    showImage:{
      width: 330,
      height: 300,
    },
    card: {
        flexDirection: 'row',

    },
    date: {
        flexDirection: 'column'
    }
  });