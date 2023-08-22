import { Router } from 'express'
import { ChatController } from './chats.controllers'
import { checkJwt } from '@/middlewares/check.jwt'

const router = Router()

router.post('/', checkJwt, ChatController.accessChat)
router.get('/', checkJwt, ChatController.fetchChats)

export { router }
