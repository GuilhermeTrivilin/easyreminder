import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { colors } from '~/commons'

const path = {
    logo: require('~/assets/logo.png')
}

export default function Home({navigation}){

    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
            <Image 
                source={path.logo}
                style={styles.logo}
            />
            </View>

            <View style={styles.textView}>
                <Text>
                    <Text style={styles.text}>Bem vindo ao </Text>
                    <Text style={[styles.text, styles.redText]}>Easy Reminder!</Text>
                </Text>

                <Text style={styles.text}>
                    Este aplicativo foi desenvolvido por um programador a fim de organizar seus horários de forma
                    simples, intuitiva e que lhe lembrasse de todas as suas tarefas diárias de forma automática!
                    Espero que este aplicativo também ajude você no seu dia a dia e aumente sua produtividade!
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("FirstEntryStart")}
                >
                    <Text style={[styles.redText, {fontSize: 20}]}>VAMOS COMEÇAR?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20
    },
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '45%',
        height: '45%',
        resizeMode: 'contain'
    },
    textView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        lineHeight: 25,
        textAlign: 'center',
        fontSize: 17
    },
    redText: {
        color: colors.red,
        fontWeight: 'bold'
    },
})