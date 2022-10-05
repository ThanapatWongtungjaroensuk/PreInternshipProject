import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';
import axios from 'axios';


const ShowItem = ({ item }) => {
    const { colors } = useTheme();

    return (
      <View style={styles.card}>
        <View style={styles.date}>
            <Text style={[styles.yearText,{color: colors.text}]}>{item.news_date.substring(3)}</Text>
            <Text style={{color: colors.text,fontWeight: '700', marginTop: 5}}>Month</Text>
            <Text style={[styles.monthText,{color: colors.text}]}>{item.news_date.split("/2023")}</Text>
        </View>
        <View style={{flex: 1,flexDirection: 'row',marginRight: 5}}>
          <Image 
            style={styles.showImage}
            source={{uri: item.news_wallpaper}}
          />
          <View style={{flex: 1}}>
            <Text style={[styles.animeName,{color: colors.text,flexShrink: 1}]}>{item.news_name}</Text>
            <View>
              <Text style={[styles.animeDetail,{color: colors.text,flexShrink: 1}]}>{item.news_description}</Text>
              <Text style={{color: colors.text,flexShrink: 1,fontSize: 12,margin: 5,fontWeight:'700'}}>Studio : {item.news_studio}</Text>
            </View>
          </View>
        </View>
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
      width: 140,
      height: 190,
      borderRadius: 10
    },
    card: {
      flexDirection: 'row',
      marginVertical: 10
    },
    date: {
      flexDirection: 'column',
      marginHorizontal: 10,
      alignItems: 'center'
    },
    yearText: {
      fontSize: 15,
      fontWeight: '800'
    },
    monthText: {
      fontSize: 30,
      fontWeight: '800'
    },
    animeName: {
      fontSize: 14,
      fontWeight: '800',
      marginLeft: 5
    },
    animeDetail: {
      fontSize: 12,
      fontWeight: '400',
      marginLeft: 5,
      marginTop: 5
    }
  });