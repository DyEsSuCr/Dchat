import { Router } from 'express'
import { getAllUsers, getOneUser, postCreateUser } from '../controllers/users.js'

const route = Router()

route.post('/users', postCreateUser)
route.get('/users', getAllUsers)
route.get('/users/:username', getOneUser)

export default route
