import React from 'react'
import { View, StyleSheet, Modal, Button, Text, TouchableOpacity } from 'react-native'
import Input from '~/components/Input'
import { colors } from '~/commons'

const AddCountdown = ({ closeModal, visible }) => {

    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent
        >
            <View style={styles.offset}>
                <View style={styles.container}>
                    <Text style={[styles.redText, {fontSize: 15}]}>ADICIONAR COUNTDOWN</Text>

                    <Input
                        placeholder='Título do Countdown'
                    />

                    <View style={styles.doubleInput}>
                        <Input
                            placeholder='Quantidade de dias'
                        />

                        <Text>ou</Text>

                        <TouchableOpacity
                            onPress={() => console.log('open date picker')}
                        >
                            <Text style={styles.redText}>SELECIONAR DATA</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text}>Selecione a cor desejada:</Text>

                    <Button title='fechar' onPress={closeModal} />
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