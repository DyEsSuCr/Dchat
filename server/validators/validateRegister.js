import { check, validationResult } from 'express-validator'

import { User } from '../models/Users.js'

export const validateRegister = [
  check('username')
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 4, max: 20 })
    .custom(async (value) => {
      const usernameExists = await User.findOne({ where: { username: value } })

      if (usernameExists) throw new Error('User already exists')

      return true
    }),

  check('password')
    .exists()
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage('Minimum 8 characters'),

  (req, res, next) => {
    try {
      validationResult(req).throw()
      next()
    } catch (err) {
      res.status(400).json(err.array()[0])
    }
  }
]
