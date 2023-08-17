import { ModelAuth } from './auth.services'
import { responseHandler } from '@/libs/response.handler'
import { type Request, type Response } from 'express'

export class AuthController {
  static async login ({ body }: Request, res: Response) {
    const { email, password } = body
    const logedUser = await ModelAuth.login({ email, password })

    responseHandler(res, 200, logedUser)
  }

  static async register ({ body }: Request, res: Response) {
    const { username, email, password } = body
    const registerUser = await ModelAuth.register({ username, email, password })

    responseHandler(res, 201, registerUser)
  }
}
