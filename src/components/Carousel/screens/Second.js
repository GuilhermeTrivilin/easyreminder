import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { colors } from '~/commons'

const path = {
    phone: require('~/assets/phone.png'),
    logo: require('~/assets/logo.png')
}

const Second = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={path.phone}
                    style={styles.image}
                />
            </View>

            <View style={styles.textView}>
                <Text style={styles.text}>
                    <Text>Nosso app te lembrará de todas as suas tarefas diárias por meio de </Text>
                    <Text style={styles.redText}>notificações automáticas! </Text>
                    <Text> Dessa forma você não precisa se preocupar em se lembrar de tudo, deixe a </Text>
                    <Text style={styles.redText}>tecnologia </Text>
                    <Text>fazer isso por você!</Text>
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
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    imageView: {
        flex: 1,
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

export default Second