import { useEffect, useRef, useState } from 'react'
import { url, dataDefault } from '../../consts'
import { searchIcon } from '../../assets'
import { options } from '../../consts'
import styles from './index.module.css'

const Home = () => {
    const [data, setData] = useState(dataDefault)
    const [query, setQuery] = useState('cullera')
    const [show, setShow] = useState(false)
    const inputRef = useRef('')

    useEffect(() => {
        console.log('ddddd')
        fetch(url + `${query}`, options)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => setData(dataDefault))
    }, [query])

    const handleToggle = () => setShow(!show)

    const submitQuery = (event) => {
        event.preventDefault()
        setQuery(inputRef.current.value)
    }

    return (
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
                        className="icon-search"
                        onClick={() => handleToggle()}
                    >
                        <img src={searchIcon} alt="search-icon" />
                    </span>
                </form>
                <div className={styles.information}>
                    <div className={styles.informationContent}>
                        <div className={styles.infoLocation}>
                            <span className={styles.nameLocation}>
                                {data.location.name + ', '}
                            </span>
                            <span className={styles.regionLocation}>
                                {data.location.region + ', '}
                            </span>
                            <span className={styles.countryLocation}>
                                {data.location.country}
                            </span>
                        </div>
                        <div className={styles.infoTemperature}>
                            <span className={styles.value}>
                                {data.current.temperature}
                            </span>
                            {/* <span className={styles.type}>°C</span> */}
                            <div className={styles.description}>
                                <span>{data.current.weather_descriptions}</span>
                                <img
                                    src={data.current.weather_icons[0]}
                                    alt={data.current.weather_descriptions}
                                    width={'40px'}
                                />
                            </div>
                        </div>
                        <div className={styles.infoExtras}>
                            <ul className={styles.extraContent}>
                                <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        Precipitation
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {data.current.precip + ' mm'}
                                    </span>
                                </li>
                                <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        Humidity
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {data.current.humidity + ' %'}
                                    </span>
                                </li>
                                <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        Pressure
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {data.current.pressure + ' mb'}
                                    </span>
                                </li>
                                <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        UV
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {data.current.uv_index}
                                    </span>
                                </li>
                                <li className={styles.extraItem}>
                                    <span className={styles.extraItemTitle}>
                                        Wind Speed
                                    </span>
                                    <span className={styles.extraItemValue}>
                                        {data.current.wind_speed + ' km/h'}
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
