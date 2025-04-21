import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Colors } from '../../contexts/theme'

const Faq = ({text,icon}:{text:string; icon:any}) => {
    return (
        <View style={{ width: "100%", flexDirection: 'row', gap: 10, alignItems: 'center', borderBottomWidth: 1.3, borderBottomColor: "#ECEDF3", paddingBottom: 12 }}>
            <View style={{ backgroundColor: Colors.secondary, alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 30, height: 30 }}>
                <Image source={icon} />
            </View>
            <AppText text={text} color={Colors.secondary} fontSize={12} />
        </View>
    )
}

export default Faq

const styles = StyleSheet.create({})