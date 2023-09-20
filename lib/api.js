import axios from "axios"

import config from "../config"

const axiosConfig = {
    baseURL: config.apiBaseURL,
    timeout: 1000
}

const api = axios.create(axiosConfig)

export { api }