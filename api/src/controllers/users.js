import { User } from '../models/Users.js'
import { getUser, getUsers } from '../services/users.js'
import { response, handleHttp } from '../utils/index.js'

export const postCreateUser = async (req, res) => {
  const { user } = req.body

  try {
    const userExist = await User.findOne({ where: { user } })

    if (userExist) return response(res, 409, { message: 'user already exists' })
    const newUser = await User.create({ user })

    response(res, 201, newUser)
  } catch (err) {
    handleHttp(res, 'postCreateUser', err)
  }
}

export const getAllUsers = async (_, res) => {
  try {
    const users = await getUsers()
    response(res, 200, users)
  } catch (err) {
    handleHttp(res, 'getAllUsers', err)
  }
}

export const getOneUser = async ({ params }, res) => {
  try {
    const username = params.username
    const user = await getUser(username)
    const data = user || 'NOT_FOUND'

    response(res, 200, data)
  } catch (err) {
    handleHttp(res, 'getOneUser', err)
  }
}
