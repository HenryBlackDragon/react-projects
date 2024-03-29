import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {genres} from '../constants'
import {
	BORDERRADIUS,
	COLORS,
	FONTFAMILY,
	FONTSIZE,
	SPACING
} from '../theme/theme'
import {MovieCardProps} from '../types'
import CustomIcon from './CustomIcon'

const MovieCard = ({
	imagePath,
	title,
	shouldMarginatedAtEnd,
	isFirst,
	isLast,
	cardWidth,
	shouldMarginatedAround,
	genre,
	vote_average,
	vote_count,
	cardFunction
}: MovieCardProps) => {
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

			<View>
				<View style={styles.rateContainer}>
					<CustomIcon name="star" style={styles.starIcon} />
					<Text style={styles.voteText}>
						{vote_average} ({vote_count})
					</Text>
				</View>

				<Text numberOfLines={1} style={styles.textTitle}>
					{title}
				</Text>

				<View style={styles.genreContainer}>
					{genre.map((item: any) => {
						return (
							<View key={item} style={styles.genreBox}>
								<Text style={styles.genreText}>{genres[item]}</Text>
							</View>
						)
					})}
				</View>
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
		fontSize: FONTSIZE.size_24,
		color: COLORS.White,
		textAlign: 'center',
		paddingVertical: SPACING.space_10
	},
	rateContainer: {
		flexDirection: 'row',
		gap: SPACING.space_10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	starIcon: {
		fontSize: FONTSIZE.size_20,
		color: COLORS.Yellow
	},
	voteText: {
		fontFamily: FONTFAMILY.poppins_medium,
		fontSize: FONTSIZE.size_14,
		color: COLORS.White
	},
	genreContainer: {
		flex: 1,
		flexDirection: 'row',
		gap: SPACING.space_20,
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	genreBox: {
		borderColor: COLORS.WhiteRGBA50,
		borderWidth: 1,
		paddingVertical: SPACING.space_4,
		paddingHorizontal: SPACING.space_10,
		borderRadius: BORDERRADIUS.radius_25
	},
	genreText: {
		fontFamily: FONTFAMILY.poppins_regular,
		fontSize: FONTSIZE.size_10,
		color: COLORS.WhiteRGBA75
	}
})

export default MovieCard
