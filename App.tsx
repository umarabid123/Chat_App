import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import SignInForm from './screens/SignIn'
import SignUpScreen from './screens/SignUpScreen'
import OnBoardingScreen from './screens/OnBoardingScreen'
import SplashScreen from './screens/SplashScreen'
import ChatScreen from './screens/ChatScreen'


const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='splashScreen' component={SplashScreen} />
        <Stack.Screen name='onBoarding' component={OnBoardingScreen} />
        <Stack.Screen name="signin" component ={SignInForm} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})


