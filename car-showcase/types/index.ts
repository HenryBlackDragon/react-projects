import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
	title: string
	containerStyles?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	btnType?: 'button' | 'submit'
}

export interface SeacrhManufacterProps {
	manufacturer: string
	setManufacturer: (manufacturer: string) => void
}
