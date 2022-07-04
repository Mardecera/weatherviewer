const logotipo = 'mardecera'
const urlInitial = 'http://api.weatherstack.com/current'
const apiKey = '7c799227f894fbfb20a2a08b6372090f'
const url = `${urlInitial}?${apiKey}&query=`

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
}

// 7c799227f894fbfb20a2a08b6372090f
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=7c799227f894fbfb20a2a08b6372090f
// https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=7c799227f894fbfb20a2a08b6372090f

export { url, logotipo, options, apiKey }
