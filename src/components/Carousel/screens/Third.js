import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { colors } from '~/commons'

const path = {
    alarm: require('~/assets/alarm.png')
}

const Third = () => {

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={path.alarm}
                    style={styles.image}
                />
            </View>

            <View style={styles.textView}>
                <Text style={styles.text}>
                    <Text>Outra funcionalidade super útil é o nosso </Text>
                    <Text style={styles.redText}>countdown! </Text>
                    <Text>Que nada mais é do que uma funcionalidade que faz </Text>
                    <Text style={styles.redText}>contagem regressiva </Text>
                    <Text>dos dias que faltam para um evento ou entrega que você tem que fazer!</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 225,
        height: 225,
        resizeMode: 'contain'
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        lineHeight: 25,
        textAlign: 'center'
    },
    redText: {
        color: colors.red,
        fontWeight: 'bold'
    },
})

export default Third