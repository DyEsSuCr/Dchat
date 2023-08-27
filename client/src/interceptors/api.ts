import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(async config => {
  let token = localStorage.getItem('token')
  if (!token) token = ''

  config.headers.Authorization = `Bearer ${token}`

  config.data = {
    ...config.data
  }

  return config
}, async (err) => {
  return await Promise.reject(err)
})

export default api
