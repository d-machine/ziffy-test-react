import axios from 'axios'

const BASE_URL = 'http://35.200.211.243:8000'

export default axios.create({ baseURL: BASE_URL })
