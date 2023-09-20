import { useState } from 'react'

const useMergeState = (initialState) => {
    const [state, setState] = useState(initialState)

    const mergeState = (newState) => {
        setState((prevState) => ({ ...prevState, ...newState }))
    }

    return [state, mergeState]
}

export default useMergeState
