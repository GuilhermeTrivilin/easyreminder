import React from 'react'
import { View, StyleSheet, ActivityIndicator, Image, Text } from 'react-native'

import { colors } from '~/commons'
import { isFirstEntry } from '~/helper/firstEntry'

const path = {
    logo: require('~/assets/logo.png')
}

export default function Preload({navigation}){

    setTimeout(async () => {
        const alreadyEntry = await isFirstEntry()

        if(alreadyEntry){
            navigation.navigate('Connected')
        } else{
            navigation.navigate('FirstEntryHome')
        }
    }, 3000)

    return (
        <View style={styles.container}>
            <Image 
                source={path.logo}
                style={styles.logo}
            />
            <Text style={styles.text}>
                <Text>Easy</Text>
                <Text style={styles.redText}>Reminder.</Text>
            </Text>
            <ActivityIndicator size="large" color={colors.red} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 25,
        marginBottom: 25,
        marginTop: 10
    },
    redText: {
        color: colors.red,
        fontWeight: 'bold'
    }
})