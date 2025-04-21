import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import { Colors } from '../../contexts/theme'
import { useNavigation } from '@react-navigation/native'

const AuthFooter = ({route2,text,subText,onSubPress}:{route2?:string; text?:any; subText?:any; onSubPress?:any}) => {
    const navigation = useNavigation<any>()
    return (
        <View style={styles.footer}>
            <AppText text={text} type='subText' subText={subText} subTextStyle={styles.registerText} style={styles.footerText} onSubPress={route2 ? ()=> navigation.navigate(route2): onSubPress} />
        </View>
    )
}

export default AuthFooter

const styles = StyleSheet.create({
    footer: {
        marginTop: 30,
    },
    footerText: {
        color: '#666',
    },
    registerText: {
        color: Colors.secondary,
        fontWeight: 'bold',
    },
})