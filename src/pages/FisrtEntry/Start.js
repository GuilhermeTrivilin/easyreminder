import React from 'react'
import { View, StyleSheet } from 'react-native'

import Carousel from '~/components/Carousel'

export default function Start({navigation}){
    return (
        <View style={styles.container}>
            <Carousel navigation={navigation} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})