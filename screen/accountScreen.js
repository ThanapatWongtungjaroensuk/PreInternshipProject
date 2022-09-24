import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,TouchableOpacity , FlatList } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useState } from "react";

const DATA = [
  {
    id: "1",
    title: "Notification",
  },
  {
    id: "2",
    title: "My list",
  },
  {
    id: "3",
    title: "settings",
  },
  {
    id: "4",
    title: "Account",
  },
  {
    id: "5",
    title: "Help",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <StatusBar/>
  </TouchableOpacity>
);

const App = () => {
  const { colors } = useTheme();
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FBAA31" : "#E0400B";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;