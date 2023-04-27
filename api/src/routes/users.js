import { Router } from 'express'
import { alreadyExists } from '../validator/alreadyExists.js'
import { getAllUsers, getOneUser, postCreateUser } from '../controllers/users.js'

const route = Router()

route.post('/', alreadyExists, postCreateUser)
route.get('/', getAllUsers)
route.get('/:username', getOneUser)

export default route
