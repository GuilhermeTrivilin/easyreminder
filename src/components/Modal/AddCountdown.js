import React, { useState } from 'react'
import { View, StyleSheet, Modal, Button, Text, TouchableOpacity } from 'react-native'

import Input from '~/components/Input'
import DateTimePicker from '@react-native-community/datetimepicker';

import { colors } from '~/commons'

const AddCountdown = ({ closeModal, visible }) => {

    const [datePicker, setDatePicker] = useState(false)
    const [date, setDate] = useState(new Date())
    const [days, setDays] = useState('')

    const renderDatePicker = datePicker && <DateTimePicker
        value={date}
        onChange={(date) => setDate(date.nativeEvent.timestamp)}
        mode='date'
    />

    const handleConfirm = (timeInDays) => {
        const date = timeInDays * (8.64 ** 7)

        console.log(date)
    }

    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent
        >
            <View style={styles.offset}>
                <View style={styles.container}>
                    <Text style={[styles.redText, { fontSize: 15 }]}>ADICIONAR COUNTDOWN</Text>

                    <Input
                        placeholder='Título do Countdown'
                    />

                    <View style={styles.doubleInput}>
                        <Input
                            placeholder='Quantidade de dias'
                            onChange={(number) => setDays(number)}
                            value={days}
                            keyboardType='numeric'
                        />

                        <Text>ou</Text>

                        <TouchableOpacity
                            onPress={() => setDatePicker(true)}
                        >
                            <Text style={styles.redText}>SELECIONAR DATA</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text}>Selecione a cor desejada:</Text>


                    <Button title='fechar' onPress={closeModal} />
                </View>
            </View>

            {renderDatePicker}

        </Modal>
    )
}

const styles = StyleSheet.create({
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '95%',
        padding: 20,
        backgroundColor: '#FFF',
    },
    redText: {
        fontWeight: 'bold',
        color: colors.red,
        textAlign: 'center',
    },
    doubleInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        marginVertical: 15,
        fontSize: 15
    }
})

export default AddCountdown