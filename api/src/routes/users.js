import { Router } from 'express'
import { getAllUsers, getOneUser, postCreateUser } from '../controllers/users.js'

const route = Router()

route.post('/', postCreateUser)
route.get('/', getAllUsers)
route.get('/:username', getOneUser)

export default route
