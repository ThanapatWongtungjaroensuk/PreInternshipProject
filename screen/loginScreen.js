import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../component/useTogglePasswordVisibility';


function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const { colors } = useTheme();
  const navigation = useNavigation()

  return (
    <View style={[styles.container, {color: colors.background}]} behavior={"padding"}>
      <StatusBar/>
      <Image
        style={styles.appLogo}
        source={require('../assets/High_Resolution_Logo_-_Transparent_Background.png')}
      />
      <Text style={{color: colors.text,fontWeight: 'bold',fontSize: 15}}>Sign in to your account</Text>
      <View style={[styles.inputContainer, {color: colors.background}]}>
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry={passwordVisibility}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
          </Pressable>
        </View>
      </View>
      <View style={[styles.buttonLogin, {color: colors.background}]}>
        <TouchableOpacity
          onPress={() => navigation.replace("Root")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.buttonWithAnother]}>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => console.log("Google Pressed")}
            style={styles.buttonOutline}
          >
            <AntDesign name="google" size={24} color="#EC9131" />
            <Text style={styles.buttonOutlineText}>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => console.log("Facebook Pressed")}
            style={styles.buttonOutline}
          >
            <Entypo name="facebook-with-circle" size={24} color="#EC9131" />
            <Text style={styles.buttonOutlineText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 50,flexDirection: 'row'}}>
        <Text style={{color: colors.text,fontWeight: '500',fontSize: 14,}}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{}}
        >
          <Text style={{color: '#0782F9',fontWeight: '500'}}>  Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '75%',
    paddingTop: 40,
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 20,
    elevation:4
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonWithAnother: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#EC9131',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    elevation:5,
  },
  buttonOutline: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 120,
    borderColor: '#EC9131',
    borderWidth: 2,
    borderRadius: 30,
    marginHorizontal: 30
  },
  buttonOutlineText: {
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 7
  },
  appLogo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  }
})