import { Router } from 'express'
import { getAllUsers, postCreateUser } from '../controllers/users.js'

const route = Router()

route.post('/users', postCreateUser)
route.get('/users', getAllUsers)

export default route
