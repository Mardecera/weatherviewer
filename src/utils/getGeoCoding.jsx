import { apiKey, apiURL } from '../consts'

const getGeoCoding = async (locationName) => {
    const url = `${apiURL}/geo/1.0/direct?q=${locationName}&limit=5&appid=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export default getGeoCoding
