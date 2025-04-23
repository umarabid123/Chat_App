import React, { useEffect, useRef } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Text
} from 'react-native';
import { Colors } from '../contexts/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const logoImage = require('../assets/images/chat-icon.png');

const SplashScreen = ({ navigation }: any) => {

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let timeoutId;
  
    // Animation sequence
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
  
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 2 }
      ),
  
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      // Both login check and navigation after animation ends
      checkLogin();
    });
  }, []);
  
  const checkLogin = async () => {
    const id = await AsyncStorage.getItem('UserId')
    if (id !== null) {
      navigation.navigate('ChatScreen')
    }else{
      navigation.navigate('onBoarding')
    }
  }

  // Interpolate progress width
  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Background decorative elements */}
      <View style={styles.decorCircle1} />
      <View style={styles.decorCircle2} />
      <View style={styles.decorCircle3} />
      <View style={styles.decorLine1} />
      <View style={styles.decorLine2} />

      {/* Logo container with animations */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { scale: pulseAnim }
            ]
          }
        ]}
      >
        <View style={styles.logoWrapper}>
          <Image
            source={logoImage}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Animated.Text
          style={[
            styles.appName,
            { opacity: fadeAnim }
          ]}
        >
          Chat App
        </Animated.Text>
      </Animated.View>

      {/* Progress bar */}
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            { width: progressWidth }
          ]}
        />
      </View>

      {/* Version text */}
      <Animated.Text
        style={[
          styles.versionText,
          { opacity: fadeAnim }
        ]}
      >
        v.1.0
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(25, 55, 35, 1)', // Match onboarding background
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Decorative elements
  decorCircle1: {
    position: 'absolute',
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: 'rgba(76, 175, 80, 0.05)',
    top: -width * 0.2,
    right: -width * 0.2,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  decorCircle2: {
    position: 'absolute',
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    backgroundColor: 'rgba(139, 195, 74, 0.05)',
    bottom: -width * 0.1,
    left: -width * 0.1,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  decorCircle3: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    top: height * 0.3,
    right: -50,
  },
  decorLine1: {
    position: 'absolute',
    width: 1,
    height: height * 0.3,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    top: height * 0.1,
    left: width * 0.2,
  },
  decorLine2: {
    position: 'absolute',
    width: 1,
    height: height * 0.2,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    bottom: height * 0.1,
    right: width * 0.3,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  appName: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: '700',
    color: Colors.primary || '#ffffff',
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 100,
    width: width * 0.7,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50', // Match the green theme
    borderRadius: 2,
  },
  versionText: {
    position: 'absolute',
    bottom: 40,
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: 1,
  },
});

export default SplashScreen;

// Example usage in navigation
/*
// In your navigation setup (e.g., App.js or Navigation.js)
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import OnBoardingScreen from './OnBoardingScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/

console.log("Premium Splash Screen created to match the Onboarding Screen");