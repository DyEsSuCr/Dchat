export default (io) => {
  io.on('connection', (socket) => {
    socket.on('message', (message) => {
      console.log(message)
    })
  })
}

/* import { Router } from 'express'
import { User } from '../models/Users.js'

export default (io) => {
  const route = Router()

  io.on('connection', (socket) => {
    socket.on('message', (message) => {
      console.log(message)
    })
  })

  route.get('/users', async (req, res) => {
    try {
      const users = await User.findAll()

      if (users.length <= 0) return res.status(200).json({ message: '0 users' })

      res.status(200).json(users)
    } catch (err) {
      res.status(400).json(err)
    }
  })

  return route
}
 */
