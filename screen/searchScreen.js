import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';

const ItemView = ({ item }) => {
    const navigation = useNavigation()
  
    return (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { animeID: item.animes_id })}>
        <Image
          style={styles.showImage}
          source={{ uri: item.animes_image }}
        />
      </TouchableOpacity>
    );
  };

function SearchScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation()
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.100:5000/animes')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.animes_name
          ? item.animes_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const renderItem = ({ item }) => (
    <ItemView item={item} />
  );

  return (
    <View style={[styles.container, {color: colors.background}]}>
      <StatusBar/>
      <View style={[styles.headerBar , {color: colors.background}]}>
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500', color: colors.text, marginLeft: 30}}>Search</Text>
      </View>
      <View style={{ flexDirection: 'row',alignItems: 'center',backgroundColor: '#1B1F22'}}>
        <Feather name="search" size={22} color='white' style={{paddingHorizontal: 8}}/>
        <View style={styles.inputStyle}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search"
            placeholderTextColor='white'
          />
        </View>
      </View>
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
  )
}

export default SearchScreen

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
  textInputStyle: {
    width: 280,
    fontSize: 14,
    color: 'white'
  },
  item: {
    width: 122,
    height: 200,
    borderRadius: 7,
    overflow: 'hidden',
    marginHorizontal: 3,
    marginTop: 6
  },
  showImage: {
    width: '100%',
    height: '100%',
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1F22',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});