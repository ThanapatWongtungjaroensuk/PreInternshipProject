import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image, Alert, Button } from 'react-native'
import { WebView } from 'react-native-webview'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

function AnimeDetails({route}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { colors } = useTheme();
  const navigation = useNavigation()
  const animeID = route.params.animeID
  const [Anime, setAnime] = useState([])
    
    useEffect(() => {
      const fetchAnime = async (ID) => {
        const url = `http://192.168.1.102:5000/animes/${ID}`
        try {
          const response = await axios.get(url)
          setAnime(response.data)
        }
        catch(error) {
          Alert.alert('Error fetch Anime data')
        }
      }
      fetchAnime(animeID)
    }, [animeID]);

  return (
    <View style={[styles.container, {color: colors.background}]}>
      <StatusBar/>
      <View style={[styles.headerBar , {color: colors.background}]}>
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <WebView
        source={{html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
        style={{marginTop: 20}}
      />
    </View>
  )
}

export default AnimeDetails

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
  video: {
    flex: 0.5,
    alignSelf: 'stretch'
  },
});