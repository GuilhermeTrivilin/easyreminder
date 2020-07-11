import React, { useState } from 'react'
import { View, StyleSheet, Modal, Text } from 'react-native'

import Input from '~/components/Input'
import ColorPalette from 'react-native-color-palette'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TransparentButton from '~/components/buttons/Transparent';

import { colors } from '~/commons'
import { maskDate } from '~/helpers/formatDate'
import { addCountdown } from '~/helpers/manageCountdown'

const AddCountdown = ({ closeModal, visible }) => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [days, setDays] = useState('')
    const [selectedColor, setSelectedColor] = useState('')

    const handleConfirm = async () => {
        if(!validateFields()) return
        let timestamp = 0

        if(days){
            timestamp = eval((days * 86400000) + new Date().getTime())
        } else{
            timestamp = Date.parse(date.split('/').reverse().join('/'))
        }
        
        await addCountdown({title, timestamp, selectedColor, start: new Date().getTime()})
        clearStates()
        closeModal()
    }

    const clearStates = () => {
        setTitle('')
        setDate('')
        setDays('')
        setSelectedColor('')
    }

    const validateFields = () => {
        if(title !== '' && selectedColor !== ''){
            if(date !== '' || days !== ''){
                return true
            } else {
                alert('Selecione a data ou a quantidade de dias!')
                return false
            }
        } else {
            alert('Preencha todos os campos.')
            return false
        }
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
                        onChangeText={setTitle}
                        value={title}
                    />

                    <View style={[styles.doubleView, { marginBottom: 15 }]}>
                        <Input
                            placeholder='Quantidade de dias'
                            onChangeText={setDays}
                            value={days}
                            keyboardType='numeric'
                            width='45%'
                        />

                        <Text>ou</Text>

                        <Input
                            placeholder='Digite a data'
                            onChangeText={setDate}
                            value={maskDate(date)}
                            keyboardType='numeric'
                            width='45%'
                            maxLength={10}
                        />
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