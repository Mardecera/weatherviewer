import { useState, useEffect } from 'react'
import { apiKey, options } from '../consts'

const getGeoCoding = async (locationName) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export default getGeoCoding
