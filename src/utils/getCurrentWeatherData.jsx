import getGeoCoding from './getGeoCoding'
import { apiKey } from '../consts'

const getCurrentWeatherData = async (locationName) => {
    const [lat, lon, name, state, country] = await getGeoCoding(locationName)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    const response = await fetch(url)
    const data = await response.json()
    const { main, wind, weather } = data
    return {
        name, state, country, main, wind, weather: weather[0]
    }
}

export default getCurrentWeatherData
