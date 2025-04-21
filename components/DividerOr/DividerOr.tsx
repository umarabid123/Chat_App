import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DividerOr = () => {
  return (
    <View style={styles.orContainer}>
           <View style={styles.line} />
           <Text style={styles.orText}>OR</Text>
           <View style={styles.line} />
         </View>
  )
}

export default DividerOr

const styles = StyleSheet.create({orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#999',
  },})