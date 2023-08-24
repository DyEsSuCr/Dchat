import { checkJwt } from '@/middlewares/check.jwt'
import { Router } from 'express'
import { MessageController } from './messages.controllers'

const router = Router()

router.get('/:id', checkJwt, MessageController.allMessages)
router.post('/', checkJwt, MessageController.sendMessage)

export { router }
