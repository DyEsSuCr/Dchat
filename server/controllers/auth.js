import { User } from '../models/Users.js'
import { generetaToken } from '../utils/generateToken.js'

export const register = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.create({
      username,
      password
    })

    const { id, username: uname } = user

    const token = generetaToken({ id, username: uname })

    res.status(201).json(token)
  } catch (err) {
    res.status(404).json(err)
  }
}

export const login = async (req, res) => {
  const { username } = req.body

  try {
    const user = await User.findOne({
      where: { username },
      attributes: ['id', 'username']
    })

    const { id, username: uname } = user

    const token = generetaToken({ id, username: uname })

    res.status(200).json(token)
  } catch (err) {
    res.status(404).json(err)
  }
}
