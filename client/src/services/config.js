import { io } from 'socket.io-client'

export const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
export const client = import.meta.env.VITE_APP_AUTH0_CLIENT

export const baseUrl = 'http://localhost:3000/api'
// export const socket = io('http://localhost:3000')
