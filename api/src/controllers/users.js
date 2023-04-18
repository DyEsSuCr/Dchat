import { User } from '../models/Users.js'

export const findOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: {
        exclude: ['password']
      }
    })

    if (!user) return res.status(404).json({ message: 'User not found' })

    res.status(200).json(user)
  } catch (err) {
    res.status(400).json(err)
  }
}
