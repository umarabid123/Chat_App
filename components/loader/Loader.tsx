import { ActivityIndicator, Dimensions, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../contexts/theme'

const Loader = () => {
    return (
        <Modal visible transparent>
            <View style={styles.modalView}>
                <View style={styles.mainView}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            </View>
        </Modal>
    )
}

export default Loader

const styles = StyleSheet.create({
    modalView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainView: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    }
})