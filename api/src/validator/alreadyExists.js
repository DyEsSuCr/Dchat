import { User } from '../models/Users.js'
import { response } from '../utils/response.js'

export const alreadyExists = async ({ body: { user } }, res, next) => {
  const userExist = await User.findOne({ where: { user } })

  if (userExist) return response(res, 409, { error: 'user already exists' })

  next()
}
