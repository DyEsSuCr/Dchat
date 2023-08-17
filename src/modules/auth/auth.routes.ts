import { Router } from 'express'
import { AuthController } from './auth.controller'
import { checkJwt } from '@/middlewares/check.jwt'

const router = Router()

router.post('/signin', checkJwt, AuthController.login)
router.post('/signup', AuthController.register)

export { router }
