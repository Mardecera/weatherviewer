import { useEffect, useRef, useState } from 'react'
import { searchIcon } from '../../assets'
import { getCurrentWeatherData } from '../../utils'
import styles from './index.module.css'

const Home = () => {
    const [data, setData] = useState(null)
    const [show, setShow] = useState(false)
    const inputRef = useRef('')

    useEffect(() => {
        const fetchData = async () => {
            const info = await getCurrentWeatherData('cullera')
            setData(info)
        }

        fetchData()
    }, [])

    const handleToggle = () => setShow(!show)

    const submitQuery = async (event) => {
        event.preventDefault()
        const info = await getCurrentWeatherData(inputRef.current.value)
        setData(info)
    }

    return data === null ? (
        <div>Cargando...</div>
    ) : (
        <div className={styles.container}>
            <div className={styles.contain}>
                <form
                    className={`${styles.search} ${show ? styles.open : ''}`}
                    onSubmit={submitQuery}
                >
                    <input
                        type="text"
                        placeholder="Que deseas buscar..."
                        ref={inputRef}
                    />
                    <button type="submit"></button>
                    <span
                        className={styles.iconSearch}
                        onClick={() => handleToggle()}
                    >
                        <img src={searchIcon} alt="search-icon" />
                    </span>
                </form>
                <div className={styles.information}>
                    <div className={styles.informationContent}>
                        <div className={styles.infoLocation}>
                            <span className={styles.nameLocation}>
                                {data.name + ', '}
                            </span>
                            <span className={styles.regionLocation}>
                                {data.state + ', '}
                            </span>
                            <span className={styles.countryLocation}>
                                {data.country}
                            </span>
                        </div>
                        <div className={styles.infoTemperature}>
                            <span className={styles.value}>
                                {data.main.temp.toFixed(1)}
                                <span className={styles.tempSymbol}>°C</span>
                            </span>
                            <div className={styles.description}>
                                <span>{data.weather.description}</span>
                                <img
                                    src={`http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`}
                                    alt={data.weather.description}
                                    width={'40px'}
                                />
                            </div>
                        </div>
                        <div className={styles.infoExtras}>
                            <ul className={styles.extraContent}>
                                {/* <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        Precipitation
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {'data.current.precip' + ' mm'}
                                    </span>
                                </li> */}
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

export default Home
