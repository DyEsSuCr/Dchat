import { check, validationResult } from 'express-validator'
import { compareSync } from 'bcrypt'

import { User } from '../models/Users.js'

export const validateLogin = [
  check('username')
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 4, max: 20 })
    .custom(async (value) => {
      const userExists = await User.findOne({ where: { username: value } })

      if (!userExists) throw new Error('User not found')

      return true
    }),

  check('password')
    .exists()
    .not()
    .isEmpty()
    .custom(async (value, { req }) => {
      const user = await User.findOne({
        where: {
          username: req.body.username
        }
      })

      const match = compareSync(value, user.password)

      if (!match) throw new Error('Password not match')

      return true
    }),

  (req, res, next) => {
    try {
      validationResult(req).throw()
      next()
    } catch (err) {
      res.status(400).json(err.array()[0])
    }
  }
]
