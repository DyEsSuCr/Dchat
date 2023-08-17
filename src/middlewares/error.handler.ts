import { type ErrorMessages } from '@/interfaces/error.messages'
import { responseHandler } from '@/libs/response.handler'
import { type NextFunction, type Request, type Response } from 'express'

export class HTTPError extends Error {
  statusCode: number
  message: ErrorMessages

  constructor (statusCode: number, message: ErrorMessages) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

export const handleErrorMiddleware = (error: HTTPError, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof HTTPError) {
    const { statusCode, message } = error
    responseHandler(res, statusCode, { statusCode, message })
  } else {
    responseHandler(res, 500, { statusCode: 500, message: 'INTERNAL_SERVER_ERROR' })
  }
}
