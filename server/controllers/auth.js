
import { User } from '../models/Users.js'

export const register = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.create({
      username,
      password
    })

    res.status(201).json(user)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const login = async (req, res) => {
  const { username } = req.body

  try {
    const user = await User.findOne({
      where: {
        username
      }
    })

    res.status(200).json(user)
  } catch (err) {
    res.status(404).json(err)
  }
}
