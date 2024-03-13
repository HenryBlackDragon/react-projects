import React, {useEffect, useState} from 'react'
import {
	ActivityIndicator,
	Dimensions,
	FlatList,
	ScrollView,
	StatusBar,
	StyleSheet,
	View
} from 'react-native'
import {
	baseImagePath,
	nowPlayingMovies,
	popularMovies,
	upcomingMovies
} from '../api/apicalls'
import CategoryHeader from '../components/CategoryHeader'
import InputHeader from '../components/InputHeader'
import MovieCard from '../components/MovieCard'
import SubMovieCard from '../components/SubMovieCard'
import {COLORS, SPACING} from '../theme/theme'
import {HomeScreenProps} from '../types'

const {width, height} = Dimensions.get('window')

const getNowPlayingMoviesList = async () => {
	try {
		const response = await fetch(nowPlayingMovies)
		const json = await response.json()
		return json
	} catch (error) {
		console.error('Spmething went wrong in getNowMovieList Function', error)
	}
}

const getUpcomingMoviesList = async () => {
	try {
		const response = await fetch(upcomingMovies)
		const json = await response.json()
		return json
	} catch (error) {
		console.error(
			'Spmething went wrong in getUpcomingMoviesList Function',
			error
		)
	}
}

const getPopularMoviesList = async () => {
	try {
		const response = await fetch(popularMovies)
		const json = await response.json()
		return json
	} catch (error) {
		console.error(
			'Spmething went wrong in getPopularMoviesList Function',
			error
		)
	}
}

const HomeScreen = ({navigation}: HomeScreenProps) => {
	const [nowPlayingMoviesList, setNowPlayingMoviesList] =
		useState<any>(undefined)
	const [upcomingMoviesList, setUpcomingPlayingMoviesList] =
		useState<any>(undefined)
	const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined)

	useEffect(() => {
		;(async () => {
			const nowPlaying = await getNowPlayingMoviesList()
			setNowPlayingMoviesList([
				{id: 'dummy1'},
				...nowPlaying.results,
				{id: 'dummy2'}
			])

			const upcoming = await getUpcomingMoviesList()
			setUpcomingPlayingMoviesList(upcoming.results)

			const popular = await getPopularMoviesList()
			setPopularMoviesList(popular.results)
		})()
	}, [])

	const searchMoviesFunction = () => {
		navigation.navigate('Search')
	}

	if (
		nowPlayingMoviesList == undefined &&
		nowPlayingMoviesList == null &&
		upcomingMoviesList == undefined &&
		upcomingMoviesList == null &&
		popularMoviesList == undefined &&
		popularMoviesList == null
	) {
		return (
			<ScrollView
				style={styles.container}
				bounces={false}
				contentContainerStyle={styles.scrollViewContainer}>
				<StatusBar hidden />

				<View style={styles.inputHeaderContainer}>
					<InputHeader searchFunction={searchMoviesFunction}></InputHeader>
				</View>

				<View>
					<ActivityIndicator size={'large'} color={COLORS.Orange} />
				</View>

				<CategoryHeader title={'Now Playing'} />

				<FlatList
					data={upcomingMoviesList}
					keyExtractor={(item: any) => item.id}
					horizontal
					decelerationRate={0}
					contentContainerStyle={styles.containerGap36}
					bounces={false}
					showsHorizontalScrollIndicator={false}
					snapToInterval={width * 0.7 + SPACING.space_36}
					renderItem={({item, index}) => {
						return !item.original_title ? (
							<View
								style={{
									width: (width - (width * 0.7 + SPACING.space_36 * 2)) / 2
								}}></View>
						) : (
							<MovieCard
								shouldMarginatedAtEnd={true}
								cardWidth={width / 3}
								isFirst={index == 0 ? true : false}
								isLast={index == upcomingMoviesList?.length - 1 ? true : false}
								title={item.original_title}
								imagePath={baseImagePath('w342', item.poster_path)}
								genre={item.genre_ids.slice(1, 4)}
								vote_average={item.vote_average}
								vote_count={item.vote_count}
								cardFunction={() => {
									navigation.push('MovieDetails', {movieid: item.id})
								}}
							/>
						)
					}}
				/>

				<CategoryHeader title={'Popular'} />

				<FlatList
					data={upcomingMoviesList}
					keyExtractor={(item: any) => item.id}
					horizontal
					contentContainerStyle={styles.containerGap36}
					bounces={false}
					showsHorizontalScrollIndicator={false}
					renderItem={({item, index}) => (
						<SubMovieCard
							shouldMarginatedAtEnd={true}
							cardWidth={width * 0.7}
							isFirst={index == 0 ? true : false}
							isLast={index == upcomingMoviesList?.length - 1 ? true : false}
							title={item.original_title}
							imagePath={baseImagePath('w780', item.poster_path)}
							cardFunction={() => {
								navigation.push('MovieDetails', {movieid: item.id})
							}}
						/>
					)}
				/>

				<CategoryHeader title={'Upcoming'} />

				<FlatList
					data={upcomingMoviesList}
					keyExtractor={(item: any) => item.id}
					horizontal
					contentContainerStyle={styles.containerGap36}
					bounces={false}
					showsHorizontalScrollIndicator={false}
					renderItem={({item, index}) => (
						<SubMovieCard
							shouldMarginatedAtEnd={true}
							cardWidth={width / 3}
							isFirst={index == 0 ? true : false}
							isLast={index == upcomingMoviesList?.length - 1 ? true : false}
							title={item.original_title}
							imagePath={baseImagePath('w342', item.poster_path)}
							cardFunction={() => {
								navigation.push('MovieDetails', {movieid: item.id})
							}}
						/>
					)}
				/>
			</ScrollView>
		)
	}

	return (
		<ScrollView
			style={styles.container}
			bounces={false}
			contentContainerStyle={styles.scrollViewContainer}>
			<StatusBar hidden />

			<View style={styles.inputHeaderContainer}>
				<InputHeader searchFunction={searchMoviesFunction}></InputHeader>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		backgroundColor: COLORS.Black
	},
	scrollViewContainer: {
		flex: 1
	},
	loadingContainer: {
		flex: 1,
		alignSelf: 'center',
		justifyContent: 'center'
	},
	inputHeaderContainer: {
		marginHorizontal: SPACING.space_36,
		marginTop: SPACING.space_28
	},
	containerGap36: {
		gap: SPACING.space_36
	}
})

export default HomeScreen
