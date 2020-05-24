import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '~/commons';

const CountdownActionButton = ({command}) => {

    MaterialCommunityIcons.loadFont()

    return (
        <View style={styles.container}>
            <ActionButton
                buttonColor={colors.red}
                size={50}
                onPress={command}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default CountdownActionButton