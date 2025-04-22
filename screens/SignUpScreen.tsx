import React, { useState } from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import Header from '../components/Header/Header'
import { globalStyle } from '../styles/globalStyle'
import TopText from '../components/TopText/TopText'
import CustomTextInput from '../components/TextInput/TextInput'
import AppText from '../components/AppText/AppText'
import { Colors } from '../contexts/theme'
import AppButton from '../components/AppButton/AppButton'
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid'

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const register = () => {
    const userId = uuid.v4().toString();

    firestore()
      .collection('users')
      .doc(userId)
      .set({
        name,
        email,
        password,
        confirmPassword,
        userId,
      })
      .then(() => {
        alert("success")
        console.log('User registered successfully');
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={globalStyle.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Header />
        <TopText
          titleText={'Create'}
          description={'quis nostrud exercitation ullamco laboris nisi ut'}
          titleSubText={'your account'}
          styles={styles.topText}
        />
        <View style={styles.formContainer}>
          <CustomTextInput
            source={require('../assets/images/Profile.png')}
            placeholder="Full Name"
            onChangeText={setName}
            value={name}
          />
          <CustomTextInput
            source={require('../assets/images/primary-mail-icon.png')}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <CustomTextInput
            source={require('../assets/images/password.png')}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            value={password}
          />
          <CustomTextInput
            source={require('../assets/images/password.png')}
            placeholder="Confirm Password"
            secureTextEntry={!showPassword}
            onChangeText={setConfirmPassword}
            value={confirmPassword}

          />
          <View style={styles.rowBetween}>
            <AppText
              text="Terms of service"
              color={Colors.secondary}
              fontSize={12}
              fontWeight={600}
            />
            <AppText
              onPress={() => setShowPassword(!showPassword)}
              text={showPassword ? 'Hide Password' : 'Show Password'}
              color={Colors.secondary}
              fontSize={12}
              fontWeight={600}
            />
          </View>

          <AppButton
            text="Register"
            containerStyle={styles.loginButton}
            onPress={register}

          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 24,
    paddingHorizontal: 20,
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
