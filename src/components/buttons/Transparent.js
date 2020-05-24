import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const TransparentButton = ({ command, text, width, color }) => {

    return (
        <TouchableOpacity
            onPress={command}
            style={[styles.container, { width, borderColor: color }]}
        >
            <Text style={[styles.text, { color }]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
})

export default TransparentButton