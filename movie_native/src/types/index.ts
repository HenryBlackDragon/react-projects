export interface CategoryHeaderProps {
	title: string
}

export interface HomeScreenProps {
	navigation: any
}

export interface InputHeaderrProps {
	searchFunction: any
}

export interface MovieCardProps {
	imagePath: string
	title: string
	shouldMarginatedAtEnd: boolean
	isFirst: boolean
	isLast: boolean
	cardWidth: number
	shouldMarginatedAround?: boolean
	genre: Array<any>
	vote_average: number
	vote_count: number
	cardFunction: any
}

export interface SubMovieCardProps {
	imagePath: string
	title: string
	shouldMarginatedAtEnd: boolean
	isFirst?: boolean
	isLast?: boolean
	cardWidth: number
	shouldMarginatedAround?: boolean
	cardFunction: any
}
