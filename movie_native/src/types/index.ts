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
	cardFunction: () => void
}

export interface SubMovieCardProps {
	imagePath: string
	title: string
	shouldMarginatedAtEnd: boolean
	isFirst?: boolean
	isLast?: boolean
	cardWidth: number
	shouldMarginatedAround?: boolean
	cardFunction: () => void
}

export interface CastCardProps {
	imagePath: string
	title: string
	shouldMarginatedAtEnd: boolean
	isFirst?: boolean
	isLast?: boolean
	cardWidth: number
	subtitle: string
}

export interface AppHeaderProps {
	action: () => void
	name: string
	header: string
}

export interface MovieDetailsScreenProps {
	navigation: any
	route: any
}

export interface SeetBookingScreenProps {
	navigation: any
	route: any
}

export interface TicketScreenProps {
	navigation: any
	route: any
}
