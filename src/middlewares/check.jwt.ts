import { UserModel } from '@/models/mongodb/users.model'
import { verifyToken } from '@/libs/jwt.handle'
import { type RequestExt } from '@/interfaces/request.interface'
import { type NextFunction, type Response } from 'express'
import { HTTPError } from './error.handler'

export const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers

    if (!authorization) throw new HTTPError(403, 'NO_TOKEN_PROVIDED')
    if (!authorization.toLocaleLowerCase().startsWith('bearer')) throw new HTTPError(403, 'NO_BEARER_TOKEN')

    const decodedToken = verifyToken(authorization.substring(7))
    if (!decodedToken) throw new HTTPError(403, 'INVALID_TOKEN')

    const user = await UserModel.findById(decodedToken).select('-password')
    if (!user) throw new HTTPError(404, 'USER_NOT_FOUND')

    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}
