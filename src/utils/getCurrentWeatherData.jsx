import { apiKey, apiURL } from '../consts'
import getCountryName from './getCountryName'

const getCurrentWeatherData = async ({ lat, lon, name, state, country }) => {
    const url = `${apiURL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const { main, wind, weather, visibility } = data
    const { feels_like, humidity, pressure, temp } = main
    const { description, icon } = weather[0]
    const { speed } = wind
    const newDescription = description[0].toUpperCase() + description.slice(1)

    return {
        location: {
            name,
            state,
            country: getCountryName(country),
        },
        weather: {
            description: newDescription,
            icon: `${icon}@2x.png`,
            temperature: temp.toFixed(1),
            feels_like: `${feels_like.toFixed(1)} °C`,
            humidity: `${humidity} %`,
            pressure: `${pressure} hPa`,
            wind_speed: `${speed.toFixed(1)} m/s`,
            visibility: `${visibility / 1000} km`,
        },
    }
}

export default getCurrentWeatherData
