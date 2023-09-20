import { useEffect, useState } from "react"
import { api } from "../lib/api"

const useFetch = (endPoint) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const response = await api.get(endPoint)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    const refetch = () => fetchData()

    const fetchNext = async (uri) => {
        try {
            const response = await api.get(uri)
            return {
                response : response.data,
                error: null
            }
        } catch (error) {
            return {
                error: error,
                response: null
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, isLoading, error, refetch, fetchNext }
}

export default useFetch