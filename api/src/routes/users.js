import { Router } from 'express'
import { findOneUser } from '../controllers/users.js'
import { userExtractor } from '../middlewares/userExtractor.js'

const route = Router()

route.get('/users/', userExtractor, findOneUser)

export default route
