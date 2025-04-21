import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/globalStyle'
import AppText from '../components/AppText/AppText'
import { Colors } from '../contexts/theme'
import AppButton from '../components/AppButton/AppButton'


const bgImage = require('../assets/images/bg-image.webp')
const logoImage = require('../assets/images/chat-icon.png')

const OnBoardingScreen = () => {
  return (
    <ImageBackground source={bgImage} style={styles.bgImage} resizeMode='cover'>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
      {/* Add a premium overlay gradient */}
      <View style={styles.gradientOverlay} />
      
      <View style={[globalStyle.container, styles.overlay]}>
        {/* Decorative elements */}
        <View style={styles.decorCircle1} />
        <View style={styles.decorCircle2} />
        <View style={styles.decorLine} />
        
        <View />

        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image source={logoImage} resizeMode='contain' style={styles.logoImage} />
          </View>
          <AppText
            text={'Real Time\nChat App'}
            color={Colors.primary}
            fontWeight={700}
            fontSize={36}
            style={styles.logoText}
          />
          
          {/* Add a tagline */}
          <View style={styles.taglineContainer}>
            <AppText
              text="Connect • Chat • Share"
              color="#ffffff"
              fontSize={14}
              style={styles.tagline}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.buttonWrapper}>
            <AppButton text="let's start" route='signin' />
          </View>
          
          <View style={styles.footerContent}>
            <AppText
              text="Made with love"
              style={styles.footerText}
              fontSize={10}
              color={Colors.lightGray}
            />
            <AppText
              text="v.1.0"
              style={styles.footerVersion}
              fontSize={10}
              fontWeight={700}
              color={Colors.lightGray}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: 'rgba(177, 164, 164, 0.05)',
    borderRadius: 0,
  },
  overlay: {
    backgroundColor: 'rgba(37, 70, 48, 0.92)', // Richer, deeper background
    justifyContent: 'space-between',
    paddingBottom: 23,
    // Premium border effect
    borderWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    // Enhanced shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 15,
  },
  // Decorative elements
  decorCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(76, 175, 80, 0.05)',
    top: -50,
    right: -50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  decorCircle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(139, 195, 74, 0.05)',
    bottom: 100,
    left: -50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  decorLine: {
    position: 'absolute',
    width: 1,
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    top: '25%',
    left: 30,
  },
  logoContainer: {
    alignItems: 'center',
    // Enhanced glow effect
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    padding: 25,
    marginTop: 60, // More space at the top
  },
  logoWrapper: {
    // Create a circular background for the logo
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    // Add a subtle border
    // borderWidth: 1,
    // borderColor: 'rgba(255, 255, 255, 0.2)',
    // Add shadow
    // shadowColor: '#fff',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.2,
    // shadowRadius: 15,
    // elevation: 8,
  },
  logoImage: {
    width: 100,
    height: 100,
    // Enhanced shadow
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  logoText: {
    width: 250, // Wider for better text layout
    textAlign: 'center',
    marginHorizontal: 'auto',
    // Enhanced text shadow
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
    letterSpacing: 1.2, // Slightly increase letter spacing
  },
  taglineContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  tagline: {
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
  },
  footer: {
    marginTop: 150, // Adjusted to accommodate the tagline
    // Enhanced top border
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
    paddingTop: 25,
    paddingHorizontal: 25,
  },
  buttonWrapper: {
    // Add a subtle glow under the button
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  footerContent: {
    marginTop: 25,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 5,
    // Enhanced text shadow
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
    letterSpacing: 0.8,
  },
  footerVersion: {
    textAlign: 'center',
    marginTop: 5,
    // Enhanced text shadow
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 3,
    letterSpacing: 0.5,
  },
})

// Enhanced AppButton styling recommendation:
/*
// Add these styles to your AppButton component
button: {
  backgroundColor: '#4CAF50', // Base green color
  paddingVertical: 16,
  paddingHorizontal: 40,
  borderRadius: 30, // Fully rounded corners
  alignItems: 'center',
  justifyContent: 'center',
  // Premium gradient effect (if using a gradient library)
  // If not, you can use a solid color with the following effects:
  
  // Enhanced shadow for depth
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.35,
  shadowRadius: 8,
  elevation: 8,
  
  // Premium border
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.25)',
  
  // Optional: inner shadow effect with a second view inside the button
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: 2, // Wider letter spacing for premium look
  
  // Text shadow for better readability
  textShadowColor: 'rgba(0, 0, 0, 0.3)',
  textShadowOffset: { width: 0.5, height: 0.5 },
  textShadowRadius: 1,
}
*/

console.log("Premium styling enhancements for OnBoardingScreen");