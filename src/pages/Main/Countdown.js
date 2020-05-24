import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import CountdownActionButton from '~/components/ActionButton/Countdown'
import AddCountdown from '~/components/Modal/AddCountdown'
import { getAllCountdown } from '~/helpers/manageCountdown'

export default function Countdown() {

	const [visible, setVisible] = useState(false)

	useEffect(async() => {
		console.log(await getAllCountdown())
	}, [])

	return (
		<View style={styles.container}>
			<CountdownActionButton
				command={() => setVisible(true)}
			/>

			<AddCountdown
				visible={visible}
				closeModal={() => setVisible(false)}
			/>
		</View>
	)

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF'
	},
})