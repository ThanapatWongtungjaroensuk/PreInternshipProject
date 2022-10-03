import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../component/useTogglePasswordVisibility';


function RegisterScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const { colors } = useTheme();
  const navigation = useNavigation()

  return (
    <View style={[styles.container, {color: colors.background}]} behavior={"padding"}>
      <StatusBar/>
      <Text style={[styles.HeaderText,{color: colors.text}]}>Register</Text>
      <View style={{marginTop: 40}}>
        <Text style={[{color: colors.text}, styles.titleText]}>Enter Name</Text>
        <View style={styles.inputStyle}>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
                style={styles.input}
            />
        </View>
      </View>
      <View style={{marginTop: 20}}>
      <Text style={[{color: colors.text}, styles.titleText]}>Enter Email</Text>
        <View style={styles.inputStyle}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={[{color: colors.text}, styles.titleText]}>Enter Password</Text>
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
      <View style={{marginTop: 20}}>
        <Text style={[{color: colors.text}, styles.titleText]}>Confirm Password</Text>
        <View style={styles.inputStyle}>
            <TextInput
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChangeText={text => setPasswordConfirm(text)}
                style={styles.input}
                secureTextEntry={passwordVisibility}
            />
            <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
        </View>
      </View>
      <View style={[styles.buttonRegister, {color: colors.background}]}>
        <TouchableOpacity
          onPress={() => console.log("Register Pressed")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 50,flexDirection: 'row'}}>
        <Text style={{color: colors.text,fontWeight: '500',fontSize: 14,}}>Already Registered?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{}}
        >
          <Text style={{color: '#0782F9',fontWeight: '500'}}>  Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 30,
    fontWeight: '700'
  },
  inputStyle: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 8,
    elevation:4
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  buttonRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#EC9131',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    elevation:5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500'
  }
})