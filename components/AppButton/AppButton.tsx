import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Colors } from '../../contexts/theme'
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface AppButtonProps {
  text?: string;
  type?: string;
  source?: any;
  iconStyle?: object;
  containerStyle?: object;
  route?:string;
  params?: object;
  onPress?: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({ text, type, source, iconStyle, containerStyle,route,params,onPress }) => {
  const navigation = useNavigation<NavigationProp<any>>();
  
  return (
    <Pressable style={[styles.button, containerStyle]}  onPress={() => {
      if (route) {
        navigation.navigate(route, params);
      } else if (onPress) {
        onPress(); 
      }
    }}>
      {(type === 'notText' || type === 'icon') && <Image source={source} style={iconStyle} />}
      {type !== 'notText' && <AppText text={text} fontSize={16} color="#fff" fontWeight={700} />}
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 10,
    width: 190,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
