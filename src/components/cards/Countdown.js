import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import ProgressCircle from 'react-native-progress-circle'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const CountdownCard = ({ item, deleteCommand }) => {

    EvilIcons.loadFont()

    const { title, timestamp, selectedColor, start } = item

    const [daysRemaining, setDaysRemaining] = useState(0)
    const [startToEnd, setStartToEnd] = useState(0)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        calculateValues()
    }, [])

    const calculateValues = () => {
        const daysRemaining = (timestamp - new Date().getTime()) / 86400000
        const startToEnd = (timestamp - start) / 86400000
        const percent = (100 * daysRemaining) / startToEnd

        setDaysRemaining(daysRemaining)
        setStartToEnd(startToEnd)
        setPercent(percent)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ProgressCircle
                percent={percent}
                radius={40}
                borderWidth={8}
                color={selectedColor}
                bgColor="#fff"
            >
                <Text style={{ fontSize: 18 }}>{daysRemaining.toFixed(0)}</Text>
            </ProgressCircle>

            <TouchableOpacity
                style={styles.deleteButton}
                onPress={deleteCommand}
            >
                <EvilIcons
                    name='trash'
                    size={25}
                    color='white'
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#D1D1D1',
        width: '40%',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5
    },
    title: {
        marginVertical: 5,
        fontWeight: 'bold',
        fontSize: 15
    },
    deleteButton: {
        marginTop: 10,
        backgroundColor: 'red',
        width: '100%',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})

export default CountdownCard