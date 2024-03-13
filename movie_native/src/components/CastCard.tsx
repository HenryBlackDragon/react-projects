import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {
	BORDERRADIUS,
	COLORS,
	FONTFAMILY,
	FONTSIZE,
	SPACING
} from '../theme/theme'
import {CastCardProps} from '../types'

const CastCard = ({
	shouldMarginatedAtEnd,
	isFirst,
	isLast,
	imagePath,
	cardWidth,
	title,
	subtitle
}: CastCardProps) => {
	return (
		<View
			style={[
				styles.container,
				shouldMarginatedAtEnd
					? isFirst
						? {marginLeft: SPACING.space_24}
						: isLast
						? {marginRight: SPACING.space_24}
						: {}
					: {},
				{maxWidth: cardWidth}
			]}>
			<Image
				source={{uri: imagePath}}
				style={[styles.cardImage, {width: cardWidth}]}
			/>
			<Text style={styles.title} numberOfLines={1}>
				{title}
			</Text>
			<Text style={styles.subtitle} numberOfLines={1}>
				{subtitle}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	cardImage: {
		aspectRatio: 1920 / 2880,
		borderRadius: BORDERRADIUS.radius_25 * 4
	},
	title: {
		alignSelf: 'stretch',
		fontFamily: FONTFAMILY.poppins_medium,
		fontSize: FONTSIZE.size_12,
		color: COLORS.White
	},
	subtitle: {
		alignSelf: 'stretch',
		fontFamily: FONTFAMILY.poppins_medium,
		fontSize: FONTSIZE.size_10,
		color: COLORS.White
	}
})

export default CastCard
