import { io } from 'socket.io-client'

export const BASE_URL = 'http://localhost:3000/api'

export const socket = io('http://localhost:3000')
