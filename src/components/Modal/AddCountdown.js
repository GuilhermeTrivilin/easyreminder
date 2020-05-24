import React, { useState } from 'react'
import { View, StyleSheet, Modal, Button, Text, TouchableOpacity } from 'react-native'

import Input from '~/components/Input'
import ColorPalette from 'react-native-color-palette'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { colors } from '~/commons'
import TransparentButton from '../buttons/Transparent';

const AddCountdown = ({ closeModal, visible }) => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState(new Date())
    const [days, setDays] = useState('')
    const [selectedColor, setSelectedColor] = useState('')

    const handleConfirm = (timeInDays) => {
        const date = timeInDays * (8.64 ** 7)

        console.log(date)
    }

    FontAwesome.loadFont()

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
                        onChange={setTitle}
                        value={title}
                    />

                    <View style={[styles.doubleView, { marginBottom: 15 }]}>
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

                    <ColorPalette
                        onChange={setSelectedColor}
                        value={selectedColor}
                        colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
                        titleStyles={{ fontSize: 15 }}
                        title='Selecione a cor da barra de progresso: '
                        icon={
                            <FontAwesome name='check-circle-o' size={25} color='white' />
                        }
                    />

                    <View style={styles.doubleView}>
                        <TransparentButton
                            text="CANCELAR"
                            color={colors.red}
                            width='45%'
                            command={closeModal}
                        />
                        <TransparentButton
                            text="CONFIRMAR"
                            color={colors.green}
                            width='45%'
                            command={handleConfirm}
                        />
                    </View>

                </View>
            </View>
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
    doubleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default AddCountdown