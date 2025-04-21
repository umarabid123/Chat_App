import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Colors } from '../../contexts/theme'

const TopText = ({ styles, titleText, titleSubText, description, subDescription,subTextStyle,type }: { styles?: object; titleSubText?: any; titleText?: any; description?: any; subDescription?: any; subTextStyle?:any; type?:any }) => {
  return (
    <View style={styles}>
      <AppText text={titleText} style={{ marginBottom: 20 }} type='subText' subText={titleSubText} fontSize={25} fontWeight={500} subTextStyle={{ fontWeight: 800 }} color={Colors.secondary} />
      <AppText text={description} subTextStyle={subTextStyle} subText={subDescription} type={type}
        fontSize={12} color={Colors.mediumGray} />
    </View>
  )
}

export default TopText

const styles = StyleSheet.create({})