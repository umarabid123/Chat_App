import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../styles/globalStyle'
import TopText from '../components/TopText/TopText'
import CustomTextInput from '../components/TextInput/TextInput'
import AppText from '../components/AppText/AppText'
import { Colors } from '../contexts/theme'
import AppButton from '../components/AppButton/AppButton'
import DividerOr from '../components/DividerOr/DividerOr'
import SocialLogin from '../components/SocialLogin/SocialLogin'
import AuthFooter from '../components/AuthFooter/AuthFooter'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header/Header'
import firestore from '@react-native-firebase/firestore'
import Loader from '../components/loader/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'



const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation<any>()

  const signIn = () => {
    setLoading(true)
    firestore().collection('users').where('email', '==', email).where('password', '==', password).get()
      .then(res => {
        setLoading(false)
        console.log(JSON.stringify(res.docs[0].data()))
        if (res.docs.length > 0) {
          navigation.navigate('ChatScreen')
          gotoNext(res.docs[0].data().name, res.docs[0].data().email, res.docs[0].data().userId)
        } else {
          Alert.alert('Invalid email or password')
        }
      }).catch(err => {
        setLoading(false)
        console.log(err)
        Alert.alert('Error', 'Something went wrong')
      })
  }

  const gotoNext = async (name:any, email:any, userId:any) => {
    await AsyncStorage.setItem('Name', name)
    await AsyncStorage.setItem('Email', email)
    await AsyncStorage.setItem('UserId', userId)
  }
  return (
    <View style={[globalStyle.container, styles.mainContainer]}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />
      <TopText titleText={"Let’s"} titleSubText={"Sign In"} description={"quis nostrud exercitation ullamco laboris nisi ut"} styles={styles.topText} />
      <View style={styles.formContainer}>
        <CustomTextInput
          source={require('../assets/images/primary-mail-icon.png')}
          placeholder='Email'
          onChangeText={setEmail}
          value={email}
        />
        <CustomTextInput
          source={require('../assets/images/password.png')}
          placeholder='Password'
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
        />

        <View style={styles.rowBetween}>
          <AppText text="Forgot password?" onPress={() => navigation.navigate('otpScreen')} color={Colors.secondary} fontSize={12} fontWeight={600} />
          <AppText
            onPress={() => setShowPassword(!showPassword)}
            text={showPassword ? 'Hide Password' : 'Show Password'}
            color={Colors.secondary}
            fontSize={12}
            fontWeight={600}
          />
        </View>

        <AppButton
          text='Login'
          containerStyle={styles.loginButton}
          onPress={signIn}

        />
        <DividerOr />
        <SocialLogin />
        <AuthFooter route2='SignUp' text={"Don’t have an account?"} subText={'Register'} />
      </View>
      {loading && <Loader />}
    </View>
  )
}

export default SignInForm

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'flex-start',
    paddingTop: 24,
    alignItems: 'flex-start',
  },
  topText: {
    marginTop: 50,
  },
  formContainer: {
    marginTop: 50,
    gap: 15,
    alignItems: 'center',
    width: '100%',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  loginButton: {
    backgroundColor: Colors.primary,
    width: 278,
    marginTop: 50,
    alignSelf: 'center',
  },
})
