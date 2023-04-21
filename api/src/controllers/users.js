import { User } from '../models/Users.js'

export const postCreateUser = async (req, res) => {
  const { user } = req.body

  try {
    const userExist = await User.findOne({ where: { user } })

    if (userExist) return res.status(409).json({ message: 'user already exists' })

    const newUser = await User.create({ user })

    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json(err)
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()

    if (users.length <= 0) return res.status(200).json({ message: '0 users' })

    res.status(200).json(users)
  } catch (err) {
    res.status(400).json(err)
  }
}

export const getOneUser = async (req, res) => {
  const { user } = req.params

  try {
    const users = await User.findOne({ where: { user } })

    if (users.length <= 0) return res.status(200).json({ message: '0 users' })

    res.status(200).json(users)
  } catch (err) {
    res.status(400).json(err)
  }
}
