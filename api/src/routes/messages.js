import { Router } from 'express'
import { sendMessage, getMessagesUserRoom } from '../controllers/messages.js'

const route = Router()

route.post('/messages', sendMessage)
route.get('/messages', getMessagesUserRoom)

export default route
