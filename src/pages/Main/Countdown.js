import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import CountdownActionButton from '~/components/ActionButton/Countdown'
import AddCountdown from '~/components/modals/AddCountdown'
import CountdownCard from '~/components/cards/Countdown'

import { getAllCountdown } from '~/helpers/manageCountdown'

export default function Countdown() {

	const [visible, setVisible] = useState(false)
	const [countdownList, setCountdownList] = useState('')

	useEffect(() => {
		getCountdownList()
	}, [])

	const getCountdownList = async () => {
		const countdownList = await getAllCountdown()
		setCountdownList(countdownList)
	}

	const renderCountdownList = countdownList !== '' && <View style={{flex: 1}}>
		<FlatList 
			date={countdownList}
			keyExtractor={(item, index) => index.toString()}
			renderItem={({item}) => <CountdownCard item={item} />}
		/>
	</View>

	return (
		<View style={styles.container}>
			<CountdownActionButton
				command={() => setVisible(true)}
			/>

			{renderCountdownList}

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