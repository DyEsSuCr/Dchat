import { Router } from 'express'
import { sendMessage } from '../controllers/messages.js'

const route = Router()

route.post('/messages', sendMessage)

export default route
