import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { Octicons, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';

const ButtonList = ({title,icon,onPress,typeIcon}) => {

  const { colors } = useTheme();
  
  const TypeIcon = () => {
    if(typeIcon == 'Ionicons'){
      return(
        <Ionicons name={icon} size={22} color="white" />
      )
    }
    else if(typeIcon == 'Entypo'){
      return(
        <Entypo name={icon} size={22} color="white" />
      )
    }
    else if(typeIcon == 'AntDesign'){
      return(
        <AntDesign name={icon} size={22} color="white" />
      )
    }
    else if(typeIcon == 'Octicons'){
      return(
        <Octicons name={icon} size={22} color="white" style={{paddingLeft:3}}/>
      )
    }
  }
    return (
      <TouchableOpacity style={styles.listButton} onPress={onPress}>
        <TypeIcon/>
        <Text style={{flex: 1,color: 'white',fontWeight: 'bold',fontSize: 17}}>   {title}</Text>
        <Entypo name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    )
  }

const AccountScreen = () => {

  const { colors } = useTheme();
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <View style={styles.detailAccount}>
        <View style={{flexDirection: 'row',/*backgroundColor: 'pink',*/alignItems:'center',marginVertical: 20,marginTop: 50}}>
          <Image
            style={styles.userLogo}
            source={require('../assets/user.png')}
          />
          <Text style={{color: colors.text,fontSize: 20,fontWeight: 'bold', marginLeft: 20,flexShrink: 1}}>Dream</Text>
        </View>
        <View style={{flexDirection: 'column',alignItems:'flex-start'/*,backgroundColor: 'blue'*/}}>
          <Text style={{color: colors.text,fontWeight: 'bold',fontSize: 15}}>Email: thanapat.wongt@ku.th</Text>
          <Text style={{color: colors.text,fontWeight: 'bold',fontSize: 15}}>Password: ***********</Text>
        </View>
      </View>
      <View style={{flex: 1,/*backgroundColor: 'green'*/}}>
        <ButtonList
          title="Notification"
          typeIcon="Ionicons"
          icon="notifications"
          onPress={() => console.log("Pressed")}
        />
        <ButtonList
          title="My list"
          typeIcon="Entypo"
          icon="list"
          onPress={() => console.log("Pressed")}
        />
        <ButtonList
          title="Settings"
          typeIcon="Ionicons"
          icon="ios-settings-sharp"
          onPress={() => console.log("Pressed")}
        />
        <ButtonList
          title="Help"
          typeIcon="AntDesign"
          icon="infocirlce"
          onPress={() => console.log("Pressed")}
        />
        <ButtonList
          title="Sign out"
          typeIcon="Octicons"
          icon="sign-out"
          onPress={() => navigation.replace("Login")}
        />
      </View>
    </View>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listButton: {
    flexDirection: 'row',
    backgroundColor: '#363636',
    height: 50,
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10

  },
  detailAccount: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'red',
    paddingLeft: 15,
    paddingBottom: 5
  },
  userLogo: {
    width: 85,
    height: 85,
  }
})