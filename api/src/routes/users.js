import { Router } from 'express'
import { getOneUser } from '../controllers/users.js'
import { userExtractor } from '../middlewares/userExtractor.js'

const route = Router()

route.get('/users/', userExtractor, getOneUser)

export default route
