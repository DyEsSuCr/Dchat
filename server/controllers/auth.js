import { User } from '../models/users.js'
import { compareSync } from 'bcrypt'

export const register = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) return res.json({ meessage: 'todos los campos son requeridos' })

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
  const { username, password } = req.body

  if (!username || !password) return res.json({ meessage: 'todos los campos son requeridos' })

  try {
    const user = await User.findOne({
      where: {
        username
      }
    })

    if (!user) return res.status(404).json({ message: 'user not found' })

    const match = compareSync(password, user.password)

    if (!match) return res.status(400).json({ message: 'password not match' })

    res.status(200).json(user)
  } catch (err) {
    res.status(404).json(err)
  }
}
