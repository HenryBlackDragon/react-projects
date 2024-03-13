import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

interface UserAccountScreenProps {}

const UserAccountScreen = (props: UserAccountScreenProps) => {
	return (
		<View style={styles.container}>
			<Text>UserAccountScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {}
})

export default UserAccountScreen
