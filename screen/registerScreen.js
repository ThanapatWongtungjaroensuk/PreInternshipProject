import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../component/useTogglePasswordVisibility';
import axios from 'axios';

function RegisterScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const { passwordVisibility, rightIcon, handlePasswordVisibility, passwordVisibilityConfirm, rightIconConfirm, handlePasswordVisibilityConfirm } = useTogglePasswordVisibility();
  const { colors } = useTheme();
  const navigation = useNavigation()


  useEffect(() => {

  }, [])


  const handleRegister = () => {
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(passwordConfirm)
    if(password === passwordConfirm && name.length != 0 && email.length != 0 && password.length != 0 && passwordConfirm.length != 0) {
      axios.post(`http://192.168.1.100:5000/accounts`, {
            accounts_name:name,
            accounts_user:email,
            accounts_pwd:password
        }).then((response) => {
          Alert.alert(
            "Register Success",
            "----------------"
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          )
          navigation.replace('Login')
        }).catch((error) => {
          console.log(error)
      });
    }
    else if(password != passwordConfirm && password.length != 0 && passwordConfirm.length != 0 && email.length != 0 && password.length != 0){
      Alert.alert(
        "ลงทะเบียนไม่สำเร็จ",
        "Please check your password and confirm password is same",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      )
    }
    else if(email.length === 0 || name.length === 0 || password.length === 0 || passwordConfirm.length === 0 ){
      if(name.length === 0){
        Alert.alert(
          "ลงทะเบียนไม่สำเร็จ",
          "Please enter name",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        )
      }
      else if(email.length === 0){
        Alert.alert(
          "ลงทะเบียนไม่สำเร็จ",
          "Please enter email",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        )
      }else if(password.length === 0){
        Alert.alert(
          "ลงทะเบียนไม่สำเร็จ",
          "Please enter password",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        )
      }else if(passwordConfirm.length === 0){
        Alert.alert(
          "ลงทะเบียนไม่สำเร็จ",
          "Please enter confirm password",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        )
      }
    }
    // try {
    //   if(foundUser) {
    //     saveUser(foundUser.accounts_user,foundUser.accounts_pwd,foundUser.accounts_name)
    //     navigation.replace("Root")
    //   }
    //   else{
    //     Alert.alert(
    //       "ลงทะเบียนไม่สำเร็จ",
    //       "Please enter Email or Password",
    //       [
    //         { text: "OK", onPress: () => console.log("OK Pressed") }
    //       ]
    //     )
    //   }
    // } catch(error) {
    //   console.log(error.message)
    // }
  }


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
                secureTextEntry={passwordVisibilityConfirm}
            />
            <Pressable onPress={handlePasswordVisibilityConfirm}>
                <MaterialCommunityIcons name={rightIconConfirm} size={22} color="#232323" />
            </Pressable>
        </View>
      </View>
      <View style={[styles.buttonRegister, {color: colors.background}]}>
        <TouchableOpacity
          onPress={handleRegister}
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