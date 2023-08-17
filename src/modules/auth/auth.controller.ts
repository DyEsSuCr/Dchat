import { ModelAuth } from './auth.services'
import { responseHandler } from '@/libs/response.handler'
import { NextFunction, type Request, type Response } from 'express'

export class AuthController {
  static async login ({ body }: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = body
      const logedUser = await ModelAuth.login({ email, password })

      responseHandler(res, 200, { logedUser })
    } catch (err) {
      next(err)
    }
  }

  static async register ({ body }: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = body
      const registerUser = await ModelAuth.register({ username, email, password })

      responseHandler(res, 201, { registerUser })
    } catch (err) {
      next(err)
    }
  }
}
