import getCountryName from './getCountryName'

const getDataMatch = (currentMatch) => {
    const { name, state, country } = currentMatch
    const countryName = getCountryName(country)
    return `${name ?? ''} ${state ? '- ' + state : ''} - ${countryName}`
}

export default getDataMatch
