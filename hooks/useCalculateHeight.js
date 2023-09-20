import { useEffect, useState } from "react"
import { Dimensions } from "react-native"

const useCalculateHeight = (heightToSubstract = 0) => {
    const [screenHeight, setScreenHeight] = useState(null)

    useEffect(() => {
        setScreenHeight(Dimensions.get('window').height - heightToSubstract)
    }, [])

    return { screenHeight }
}

export default useCalculateHeight