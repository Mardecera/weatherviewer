import { useRef, useState } from 'react'
import {
    getCountryName,
    getCurrentWeatherData,
    getGeoCoding,
} from '../../utils'
import { urlIcon } from '../../consts'
import styles from './index.module.css'

const Result = ({ data, setData }) => {
    const [matches, setMatches] = useState([])
    const inputRef = useRef('')
    const matchesRef = useRef('')

    const getMatches = async (event) => {
        event.preventDefault()
        const currentMatches = await getGeoCoding(inputRef.current.value)
        setMatches(currentMatches)
    }

    const getMatch = async (currentMatch) => {
        const info = await getCurrentWeatherData(currentMatch)
        setData(info)
        inputRef.current.value = ''
        setMatches([])
    }

    const showDataMatch = (currentMatch) => {
        const { name, state, country } = currentMatch
        const countryName = getCountryName(country)
        return `${name ?? ''} ${state ? '- ' + state : ''} - ${countryName}`
    }

    return (
        <div className={styles.container}>
            <div className={styles.contain}>
                <form
                    className={`${styles.search} ${styles.open}`}
                    onSubmit={getMatches}
                >
                    <input
                        type="text"
                        placeholder="Que deseas buscar..."
                        ref={inputRef}
                    />
                    <div className={styles.matchesList} ref={matchesRef}>
                        {matches.map((match, index) => (
                            <div
                                key={index}
                                className={styles.matchesItem}
                                onClick={() => getMatch(match)}
                            >
                                {showDataMatch(match)}
                            </div>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className={styles.buttonSubmit}
                    ></button>
                    <div className={styles.iconSearch}>
                        <button>Search</button>
                    </div>
                </form>
                <div className={styles.information}>
                    <div className={styles.informationContent}>
                        <div className={styles.infoLocation}>
                            <span className={styles.nameLocation}>
                                {data.name}
                            </span>
                            <span className={styles.regionLocation}>
                                {data.state}
                            </span>
                            <span className={styles.countryLocation}>
                                {', ' + getCountryName(data.country)}
                            </span>
                        </div>
                        <div className={styles.infoTemperature}>
                            <div className={styles.value}>
                                <div>{data.main.temp.toFixed(1)}</div>
                                <div className={styles.tempSymbol}>°C</div>
                            </div>
                            <div className={styles.description}>
                                <span>{data.weather.description}</span>
                                <img
                                    src={`${urlIcon}${data.weather.icon}@2x.png`}
                                    alt={data.weather.description}
                                    width={'40px'}
                                />
                            </div>
                        </div>
                        <div className={styles.infoExtras}>
                            <ul className={styles.extraContent}>
                                <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        Humidity
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {data.main.humidity + ' %'}
                                    </span>
                                </li>
                                <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        Pressure
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {data.main.pressure + ' mb'}
                                    </span>
                                </li>
                                <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        Wind Speed
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {data.wind.speed + ' km/h'}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
