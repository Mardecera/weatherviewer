const logotipo = 'mardecera'
const apiKey = '7c799227f894fbfb20a2a08b6372090f'
const apiURL = 'https://api.openweathermap.org'
const urlIcon = 'https://openweathermap.org/img/wn/'
const searchInputText = 'What do you want to look for ?'

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
}

export { logotipo, options, apiKey, apiURL, urlIcon, searchInputText }
