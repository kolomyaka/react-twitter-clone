import axios from 'axios'

axios.interceptors.request.use((config) => {
        if (config.headers) {
            config.headers['token'] = window.localStorage.getItem('token') || 123
            return config
        }
    },
    (err: Error | null) => Promise.reject(err)
)

export { axios };