import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'

import AddCountdown from '~/components/modals/AddCountdown'
import CountdownCard from '~/components/cards/Countdown'
import FabButton from '~/components/FabButton'

import { getAllCountdown, deleteCountdown } from '~/helpers/manageCountdown'
import { colors } from '~/commons'

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

	const closeModal = () => {
		getCountdownList()
		setVisible(false)
	}

	const removeCountdown = async (item) => {
		await deleteCountdown(item)
		getCountdownList()
	}

	const renderCountdownList = countdownList !== '' && <ScrollView
	>
		<View style={styles.countdownList}>

			{countdownList.map((item, index) => <CountdownCard
				key={index}
				item={item}
				deleteCommand={() => removeCountdown(item)}
			/>)}
		</View>
	</ScrollView>

	return (
		<SafeAreaView style={{flex: 1}}>
			<View style={styles.container}>

				{renderCountdownList}

				<AddCountdown
					visible={visible}
					closeModal={() => closeModal()}
				/>

				<FabButton
					color={colors.red}
					command={() => setVisible(true)}
				/>
			</View>
		</SafeAreaView>
	)

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	countdownList: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	}
})