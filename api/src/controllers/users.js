import { User } from '../models/Users.js'
import { response } from '../utils/response.js'

export const postCreateUser = async (req, res) => {
  const { user } = req.body

  try {
    const userExist = await User.findOne({ where: { user } })

    if (userExist) return response(res, 409, { message: 'user already exists' })
    const newUser = await User.create({ user })

    response(res, 201, newUser)
  } catch (err) {
    response(res, 400, err)
  }
}

export const getAllUsers = async (_, res) => {
  try {
    const users = await User.findAll()

    if (users.length <= 0) return response(res, 200, { message: '0 users' })

    response(res, 200, users)
  } catch (err) {
    response(res, 400, err)
  }
}

export const getOneUser = async (req, res) => {
  const { user } = req.params

  try {
    const users = await User.findOne({ where: { user } })

    if (users) return response(res, 404, { message: 'user not found' })

    response(res, 200, users)
  } catch (err) {
    response(res, 400, err)
  }
}
