import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'

import CountdownActionButton from '~/components/ActionButton/Countdown'
import AddCountdown from '~/components/Modal/AddCountdown'

export default function Countdown(){

	const [visible, setVisible] = useState(false)

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