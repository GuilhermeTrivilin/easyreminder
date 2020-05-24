import React from 'react'
import { View, StyleSheet, Modal, Button } from 'react-native'
import Input from '~/components/Input'

const AddCountdown = ({closeModal, visible}) => {

    return (
        <Modal
            visible={visible}
            animationType='fade'
            transparent
        >
            <View style={styles.offset}>
                <View style={styles.container}>

                    <Input
                        placeholder='Título do Countdown'
                    />
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
    }
})

export default AddCountdown