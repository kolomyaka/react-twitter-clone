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


axios.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {

        if (err.response.status === 401){
            if (window.location.pathname !== '/signin') {
                window.location.href = '/signin'
            }
            return Promise.reject(err);
        }

        return Promise.reject(err);
    }
    )
axios.defaults.baseURL = 'http://localhost:8888';


export { axios as api };