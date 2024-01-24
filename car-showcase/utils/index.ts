import { CarProps, FilterProps } from '@/types'

export async function fetchCars(filters: FilterProps) {
	const { manufacturer, model, year, limit, fuel } = filters

	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
	const headers = {
		'X-RapidAPI-Key': '1c3458782amsh95c64799a07ea69p129082jsnaddd8727b06b',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

	const response = await fetch(url, { headers: headers })

	return await response.json()
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50 // Base rental price per day in dollars
	const mileageFactor = 0.1 // Additional rate per mile driven
	const ageFactor = 0.05 // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor
	const ageRate = (new Date().getFullYear() - year) * ageFactor

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

	return rentalRatePerDay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
	// Get the current URL search params
	const searchParams = new URLSearchParams(window.location.search)

	// Set the specified search parameter to the given value
	searchParams.set(type, value)

	// Set the specified search parameter to the given value
	const newPathname = `${window.location.pathname}?${searchParams.toString()}`

	return newPathname
}

export const deleteSearchParams = (type: string) => {
	// Set the specified search parameter to the given value
	const newSearchParams = new URLSearchParams(window.location.search)

	// Delete the specified search parameter
	newSearchParams.delete(type.toLocaleLowerCase())

	// Construct the updated URL pathname with the deleted search parameter
	const newPathname = `${
		window.location.pathname
	}?${newSearchParams.toString()}`

	return newPathname
}
