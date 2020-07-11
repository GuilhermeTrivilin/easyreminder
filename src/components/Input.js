import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors } from '~/commons'

const Input = ({ width, ...props }) => {

    return (
        <TextInput
            style={[styles.container, { width }]}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: colors.red,
        paddingBottom: 0,
        marginBottom: 5,
        paddingVertical: 10,
        fontSize: 15
    }
})

export default Input