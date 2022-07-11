const getCountryName = (countryCode) => {
    const countryName = new Intl.DisplayNames(['en'], { type: 'region' })
    return countryName.of(countryCode)
}

export default getCountryName
