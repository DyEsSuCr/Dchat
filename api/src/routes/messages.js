import { Router } from 'express'
import { sendMessage, getMessagesUserRoom } from '../controllers/messages.js'

const route = Router()

route.post('/', sendMessage)
route.get('/', getMessagesUserRoom)

export default route
