import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

interface TicketScreenProps {}

const TicketScreen = (props: TicketScreenProps) => {
	return (
		<View style={styles.container}>
			<Text>TicketScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {}
})

export default TicketScreen