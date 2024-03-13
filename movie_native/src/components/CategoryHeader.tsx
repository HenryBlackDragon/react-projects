import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme'
import {CategoryHeaderProps} from '../types'

const CategoryHeader = ({title}: CategoryHeaderProps) => {
	return <Text style={styles.text}>{title}</Text>
}

const styles = StyleSheet.create({
	text: {
		fontFamily: FONTFAMILY.poppins_semibold,
		fontSize: FONTSIZE.size_20,
		color: COLORS.White,
		paddingHorizontal: SPACING.space_36,
		paddingVertical: SPACING.space_28
	}
})

export default CategoryHeader
