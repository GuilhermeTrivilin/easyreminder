import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Animated, Text } from 'react-native';

import First from '~/components/Carousel/screens/First'
import { colors } from '~/commons';

const { width } = Dimensions.get('window');

const screens = [
	{ component: <First /> },
	{ component: <First /> },
	{ component: <First /> },
];

export default class Carousel extends React.Component {

	scrollX = new Animated.Value(0)

	render() {
		let position = Animated.divide(this.scrollX, width);
		return (
			<View style={styles.container}>
				<View
					style={styles.scrollView}
				>
					<ScrollView
						horizontal={true}
						pagingEnabled={true}
						showsHorizontalScrollIndicator={false}
						scrollEventThrottle={16}
						onScroll={Animated.event(
							[{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
							{ useNativeDriver: false }
						)}
					>
						{screens.map((item, index) => <>{item.component}</>)}
					</ScrollView>
				</View>
				<View
					style={styles.rowView}
				>
					{screens.map((_, i) => {
						let opacity = position.interpolate({
							inputRange: [i - 1, i, i + 1],
							outputRange: [0.3, 1, 0.3],
							extrapolate: 'clamp'
						});
						return <Animated.View
							key={i}
							style={[styles.scrollIndicator, { opacity }]}
						/>
					})}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#FFF',
	},
	scrollView: {
		flex: 1,
	},
	rowView: {
		flexDirection: 'row'
	},
	scrollIndicator: {
		height: 10,
		width: 10,
		backgroundColor: colors.red,
		marginVertical: 8,
		marginHorizontal: 3,
		borderRadius: 5
	}
})