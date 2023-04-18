import { Router } from 'express'
import { findOneUser } from '../controllers/users.js'

const route = Router()

route.get('/users/', findOneUser)

export default route
