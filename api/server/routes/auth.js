import { Router } from 'express'
import { register, login } from '../controllers/auth.js'
import { validateLogin } from '../validators/validateLogin.js'
import { validateRegister } from '../validators/validateRegister.js'

const route = Router()

route.post('/login', validateLogin, login)
route.post('/register', validateRegister, register)

export default route
