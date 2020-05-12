import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const First = () => {

    return (
        <View style={styles.container}>
            <View style={styles.logoArea}>
                <Text>TESTE</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#FFF'
    }
})

export default First