import { useEffect, useState } from 'react'
import { options } from '../consts'

const useFetch = (url) => {
    const [data, setData] = useState('')
    console.log(url)

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.warn(err))
    }, [])

    return data
}

export default useFetch
