const logotipo = 'mardecera'
const urlInitial = 'http://api.weatherstack.com/current'
const key = 'access_key=112552a37a94bb1814fe804cd09710b5'

const url = `${urlInitial}?${key}&query=`
const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
}

const dataDefault = {
    request: {
        type: 'City',
        query: 'Cullera, Spain',
        language: 'en',
        unit: 'm',
    },
    location: {
        name: 'Cullera',
        country: 'Spain',
        region: 'Andalucia',
        lat: '39.167',
        lon: '-0.250',
        timezone_id: 'Europe/Madrid',
        localtime: '2022-07-03 19:32',
        localtime_epoch: 1656876720,
        utc_offset: '2.0',
    },
    current: {
        observation_time: '05:32 PM',
        temperature: 28,
        weather_code: 116,
        weather_icons: [
            'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png',
        ],
        weather_descriptions: ['Partly cloudy'],
        wind_speed: 26,
        wind_degree: 33,
        wind_dir: 'NNE',
        pressure: 1016,
        precip: 0,
        humidity: 51,
        cloudcover: 27,
        feelslike: 29,
        uv_index: 7,
        visibility: 10,
        is_day: 'yes',
    },
}

export { url, logotipo, options, dataDefault }
