import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {
	BORDERRADIUS,
	COLORS,
	FONTFAMILY,
	FONTSIZE,
	SPACING
} from '../theme/theme'
import {SubMovieCardProps} from '../types'

const SubMovieCard = ({
	imagePath,
	title,
	shouldMarginatedAtEnd,
	isFirst,
	isLast,
	cardWidth,
	shouldMarginatedAround,
	cardFunction
}: SubMovieCardProps) => {
	return (
		<TouchableOpacity onPress={() => cardFunction()}>
			<View
				style={[
					styles.container,
					shouldMarginatedAtEnd
						? isFirst
							? {marginLeft: SPACING.space_36}
							: isLast
							? {marginRight: SPACING.space_36}
							: {}
						: {},
					shouldMarginatedAround ? {margin: SPACING.space_12} : {},
					{maxWidth: cardWidth}
				]}>
				<Image style={styles.cardImage} source={{uri: imagePath}} />
				<Text numberOfLines={1} style={styles.textTitle}>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		backgroundColor: COLORS.Black
	},
	cardImage: {
		aspectRatio: 2 / 3,
		borderRadius: BORDERRADIUS.radius_20
	},
	textTitle: {
		fontFamily: FONTFAMILY.poppins_regular,
		fontSize: FONTSIZE.size_14,
		color: COLORS.White,
		textAlign: 'center',
		paddingVertical: SPACING.space_10
	}
})

export default SubMovieCard
