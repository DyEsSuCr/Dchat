import { User } from '../models/Users.js'

export const getUser = async (username) => {
  const user = await User.findOne({ where: { user: username } })
  return user
}

export const getUsers = async () => {
  const users = await User.findAll()
  return users
}
