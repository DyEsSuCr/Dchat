import { Router } from 'express'
import { ChatController } from './chats.controllers'
import { checkJwt } from '@/middlewares/check.jwt'

const router = Router()

router.post('/', checkJwt, ChatController.accessChat)
router.get('/', checkJwt, ChatController.fetchChats)
router.post('/group', checkJwt, ChatController.createGroupChat)
router.put('/rename', checkJwt, ChatController.renameGroup)
router.put('/groupremove', checkJwt, ChatController.removeFromGroup)
router.put('/groupadd', checkJwt, ChatController.addToGroup)

export { router }
