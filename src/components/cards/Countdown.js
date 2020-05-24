import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import ProgressCircle from 'react-native-progress-circle'

const CountdownCard = ({item}) => {

    const { title, timestamp, selectedColor } = item

    const calculatePercent = () => {
        
        console.log((100 * new Date().getTime()) / 1591149536593 )

        return null
    }

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            {calculatePercent}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default CountdownCard