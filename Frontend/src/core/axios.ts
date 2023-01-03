import axios from 'axios'

axios.interceptors.request.use((config) => {
        if (config.headers) {
            let token = window.localStorage.getItem('token')
            if (token) {
                config.headers['token'] = token
            }
            return config
        }
    },
    (err: Error | null) => Promise.reject(err)
)

export { axios as api };