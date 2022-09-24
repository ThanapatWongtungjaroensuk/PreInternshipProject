import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';

function AccountScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, {color: colors.background}]}>
      <Text style={{fontSize: 25, color: colors.text}}>Account page</Text>
      <StatusBar/>
    </View>
  )
}
export default AccountScreen
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
  </TouchableOpacity>
);

const App = () => {
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
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