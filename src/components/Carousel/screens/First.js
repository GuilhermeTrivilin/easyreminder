import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { colors } from '~/commons'

const path = {
    logo: require('~/assets/logo.png')
}

const First = () => {

    return (
        <View style={styles.container}>
            <View style={styles.logoArea}>
                <Image
                    source={path.logo}
                    style={styles.logo}
                />
                <Text style={styles.title}>
                    <Text style={styles.redText}>Easy</Text>
                    <Text>Reminder</Text>
                </Text>
            </View>

            <View style={styles.textView}>
                <Text style={styles.text}>
                    <Text>Este aplicativo é super </Text>
                    <Text style={styles.redText}>simples e legal! </Text>
                    <Text>A principal finalidade do app é te ajudar a </Text>
                    <Text style={styles.redText}>organizar suas tarefas </Text>
                    <Text>do dia de forma </Text>
                    <Text style={styles.redText}>simples e tecnológica! </Text>
                    <Text>Vamos lá, vou te explicar as duas principais finalidades de nosso app!</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    logoArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        flex: 1,
    },
    text: {
        lineHeight: 25,
        textAlign: 'center'
    },
    redText: {
        color: colors.red,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        marginTop: 15
    }
})

export default First