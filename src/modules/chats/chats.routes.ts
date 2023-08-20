import { Router } from 'express'
import { ChatController } from './chats.controllers'
import { checkJwt } from '@/middlewares/check.jwt'

const router = Router()

router.get('/', checkJwt, ChatController.obtener)

export { router }
