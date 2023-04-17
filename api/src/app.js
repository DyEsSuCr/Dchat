import { Server as SocketServer } from 'socket.io'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import http from 'http'

import fnSocket from './sockets/sockets.js'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
  cors: {
    origin: '*'
  }
})

fnSocket(io)

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api', authRoute)
app.use('/api', usersRoute)

// Route Not Found
app.use((req, res) => {
  res.status(404).json({
    error: 'Rout Not Found'
  })
})

export default server
