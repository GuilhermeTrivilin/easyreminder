import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'

const FabButton = ({ color, command }) => {

    Entypo.loadFont()

    return (
        <TouchableOpacity
            onPress={command}
            style={[styles.container, { backgroundColor: color }]}
        >
            <Entypo 
                name='plus'
                color='white'
                size={30}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 12,
        bottom: 12
    }
})

export default FabButton