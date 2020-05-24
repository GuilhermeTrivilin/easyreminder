import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors } from '~/commons'

const Input = ({ ...props }) => {

    return (
        <TextInput
            style={styles.container}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: colors.red,
        paddingBottom: 0,
        marginBottom: 5
    }
})

export default Input