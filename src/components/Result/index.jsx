import { useRef, useState } from 'react'
import { getCurrentWeatherData, getGeoCoding, getDataMatch } from '../../utils'
import { urlIcon, searchInputText } from '../../consts'
import styles from './index.module.css'

const ShowMatches = ({ matches, setMatch }) => (
    <>
        {matches.map((match, index) => (
            <div
                key={index}
                className={styles.matchesItem}
                onClick={() => setMatch(match)}
            >
                <p>{getDataMatch(match)}</p>
            </div>
        ))}
    </>
)

const Result = ({ data, setData }) => {
    const [matches, setMatches] = useState([])
    const inputRef = useRef('')
    const matchesRef = useRef('')

    const getMatches = async (event) => {
        event.preventDefault()
        const currentMatches = await getGeoCoding(inputRef.current.value)
        setMatches(currentMatches)
    }

    const setMatch = async (currentMatch) => {
        const info = await getCurrentWeatherData(currentMatch)
        setData(info)
        inputRef.current.value = ''
        setMatches([])
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
                        placeholder={searchInputText}
                        ref={inputRef}
                    />
                    <div className={styles.matchesList} ref={matchesRef}>
                        <ShowMatches matches={matches} setMatch={setMatch} />
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
                                {data.location.name}
                            </span>
                            <span className={styles.regionLocation}>
                                {data.location.state}
                            </span>
                            <span className={styles.countryLocation}>
                                {data.location.state ? ', ' : null}
                                {data.location.country}
                            </span>
                        </div>
                        <div className={styles.infoTemperature}>
                            <div className={styles.value}>
                                <div>{data.weather.temperature}</div>
                                <div className={styles.tempSymbol}>°C</div>
                            </div>
                            <div className={styles.description}>
                                <span>
                                    Feels like {data.weather.feels_like}.{' '}
                                    {data.weather.description}
                                </span>
                                <img
                                    src={`${urlIcon}${data.weather.icon}`}
                                    alt={data.weather.description}
                                    width={'40px'}
                                />
                            </div>
                        </div>
                        <div className={styles.infoExtras}>
                            <ul className={styles.extraContent}>
                                <li>{`Humidity: ${data.weather.humidity}`}</li>
                                <li>{`Pressure: ${data.weather.pressure}`}</li>
                                <li>{`Wind Speed: ${data.weather.wind_speed}`}</li>
                                <li>{`Visibility: ${data.weather.visibility}`}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
