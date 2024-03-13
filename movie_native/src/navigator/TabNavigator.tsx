import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import {StyleSheet, View} from 'react-native'
import CustomIcon from '../components/CustomIcon'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import TicketScreen from '../screens/TicketScreen'
import UserAccountScreen from '../screens/UserAccountScreen'
import {COLORS, FONTSIZE, SPACING} from '../theme/theme'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: false,
				tabBarStyle: {
					backgroundColor: COLORS.Black,
					borderTopWidth: 0,
					height: SPACING.space_10 * 10
				}
			}}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({focused, color, size}) => {
						return (
							<View
								style={[
									styles.activeTabBackground,
									focused ? {backgroundColor: COLORS.Orange} : {}
								]}>
								<CustomIcon
									name="video"
									color={COLORS.White}
									size={FONTSIZE.size_30}></CustomIcon>
							</View>
						)
					}
				}}></Tab.Screen>
			<Tab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({focused, color, size}) => {
						return (
							<View
								style={[
									styles.activeTabBackground,
									focused ? {backgroundColor: COLORS.Orange} : {}
								]}>
								<CustomIcon
									name="seacrh"
									color={COLORS.White}
									size={FONTSIZE.size_30}></CustomIcon>
							</View>
						)
					}
				}}></Tab.Screen>
			<Tab.Screen
				name="Ticket"
				component={TicketScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({focused, color, size}) => {
						return (
							<View
								style={[
									styles.activeTabBackground,
									focused ? {backgroundColor: COLORS.Orange} : {}
								]}>
								<CustomIcon
									name="ticket"
									color={COLORS.White}
									size={FONTSIZE.size_30}></CustomIcon>
							</View>
						)
					}
				}}></Tab.Screen>
			<Tab.Screen
				name="User"
				component={UserAccountScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: ({focused, color, size}) => {
						return (
							<View
								style={[
									styles.activeTabBackground,
									focused ? {backgroundColor: COLORS.Orange} : {}
								]}>
								<CustomIcon
									name="user"
									color={COLORS.White}
									size={FONTSIZE.size_30}></CustomIcon>
							</View>
						)
					}
				}}></Tab.Screen>
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	activeTabBackground: {
		backgroundColor: COLORS.Black,
		padding: SPACING.space_10,
		borderRadius: SPACING.space_10 * 10
	}
})

export default TabNavigator
