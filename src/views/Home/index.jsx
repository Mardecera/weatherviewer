import { useState, useEffect } from 'react'
import { Loading, Result } from '../../components'
import { getCurrentWeatherData, getGeoCoding } from '../../utils'

const Home = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const currentMatch = await getGeoCoding('Cullera')
            const info = await getCurrentWeatherData(currentMatch[0])
            console.log(info)
            setData(info)
        }

        fetchData()
    }, [])

    const setCurrentData = (currentData) => setData(currentData)

    return data === null ? (
        <Loading />
    ) : (
        <Result data={data} setData={setCurrentData} />
    )
}

export default Home
