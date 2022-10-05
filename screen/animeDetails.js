import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image, Alert, Button, Linking } from 'react-native'
import { WebView } from 'react-native-webview'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import YoutubePlayer from "react-native-youtube-iframe";
import ReadMore from '@fawazahmed/react-native-read-more';
import axios from 'axios';

function AnimeDetails({route}) {

  const [status, setStatus] = React.useState({});
  const { colors } = useTheme();
  const navigation = useNavigation()
  const animeID = route.params.animeID
  const [Anime, setAnime] = useState([])
  const [AnimeTrailer, setAnimeTrailer] = useState('')

    useEffect(() => {
      const fetchAnime = async (ID) => {
        const url = `http://192.168.1.102:5000/animes/${ID}`
        try {
          const response = await axios.get(url)
          setAnime(response.data)
          setAnimeTrailer(response.data.animes_trailer)
        }
        catch(error) {
          Alert.alert('Error fetch Anime data')
        }
      }
      fetchAnime(animeID)
    }, [animeID]);
  
    const OpenURL = async (url) => {
      const isSupported = await Linking.canOpenURL(url);
      if(isSupported) {
         await Linking.openURL(url);
      }
      else {
         Alert.alert(`Can not open this link ${url}`);
      }
    }

  return (
    <View style={[styles.container, {color: colors.background}]}>
      <StatusBar/>
      <View style={[styles.headerBar , {color: colors.background}]}>
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500', color: colors.text, marginLeft: 30}}>{Anime.animes_name}</Text>
      </View>
      <YoutubePlayer
        height={220}
        play
        videoId={AnimeTrailer.substring(30)}
      />
      <View style={styles.detailAnime}>
        <Text style={[styles.animeName,{color: colors.text}]}>{Anime.animes_name}</Text>
        <View style={{flexDirection: 'row',alignItems: 'center',marginTop: 10}}>
          <Text style={[styles.animeInformation,{color: colors.text}]}>{Anime.animes_year}</Text>
          <Entypo name="dot-single" size={19} color={colors.text} />
          <Text style={[styles.animeInformation,{color: colors.text}]}>{Anime.animes_seasonal}</Text>
          <Entypo name="dot-single" size={19} color={colors.text} />
          <Text style={[styles.animeInformation,{color: colors.text}]}>{Anime.animes_episodes} episodes</Text>
        </View>
        <View style={{flexDirection: 'row',alignItems: 'center',marginTop: 5}}>
          <Text style={[styles.animeInformation,{color: colors.text}]}>{Anime.Studio}</Text>
          <Entypo name="dot-single" size={19} color={colors.text} />
          <Text style={[styles.animeInformation,{color: colors.text}]}>score : </Text>
          <AntDesign name="star" size={12} color="#FFDD2F" />
          <Text style={[styles.animeInformation,{color: colors.text}]}> {Anime.animes_score}</Text>
        </View>
        <View style={{marginTop: 10}}>
          <ReadMore
              numberOfLines={3}
              style={{color: colors.text}}
              seeMoreStyle={{color: colors.text,fontWeight: '800'}}
              seeLessStyle={{color: colors.text,fontWeight: '800'}}>
              <Text style={[styles.animeContent]}>{Anime.animes_content}</Text>
          </ReadMore>
        </View>
        <TouchableOpacity style={styles.linkButton} onPress={() => { OpenURL(Anime.animes_streaming) }}>
          <AntDesign name="caretright" size={20} color={colors.text} />
          <Text style={{color: colors.text,marginLeft: 10,fontWeight: '600',}}>Go to Streaming</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <TouchableOpacity style={[styles.Button,{backgroundColor: colors.text}]} onPress={() => {}}>
            <Ionicons name="add-circle" size={20} color={colors.background} />
            <Text style={{color: colors.background,marginLeft: 10,fontWeight: '600'}}>Add my list</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Button,{backgroundColor: colors.text}]} onPress={() => {}}>
            <FontAwesome5 name="share-alt" size={20} color={colors.background} />
            <Text style={{color: colors.background,marginLeft: 10,fontWeight: '600'}}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  detailAnime: {
    flex: 1,
    marginHorizontal: 10,
  },
  animeName: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 10
  },
  animeInformation: {
    fontSize: 14,
    fontWeight: '500',
  },
  animeContent: {
    fontSize: 14,
    fontWeight: '500',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F09E23',
    marginTop: 15,
    height: 40,
    borderRadius: 5,
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    height: 40,
    width: 170,
    borderRadius: 5
  }
});