import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../contexts/theme'
import AppButton from '../AppButton/AppButton'

const SocialLogin = () => {
    return (
        <View style={styles.socialContainer}>
            <AppButton containerStyle={{ backgroundColor: Colors.softGray, width: 158, borderRadius: 8 }} type='notText' source={(require('../../assets/images/google.png'))} />
            <AppButton containerStyle={{ backgroundColor: Colors.softGray, width: 158, borderRadius: 8 }} type='notText' source={(require('../../assets/images/facebook.png'))} />
        </View>
    )
}

export default SocialLogin

const styles = StyleSheet.create({ socialContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20
  },
  socialButton: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 12,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },})