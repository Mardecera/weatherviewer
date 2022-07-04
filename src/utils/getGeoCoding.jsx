import { useState, useEffect } from 'react'
import { apiKey, options } from '../consts'

const getGeoCoding = async (locationName) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    const countryName = new Intl.DisplayNames(['en'], { type: 'region' })

    return [
        data[0].lat,
        data[0].lon,
        data[0].name,
        data[0].state,
        countryName.of(data[0].country),
    ]
}

export default getGeoCoding
