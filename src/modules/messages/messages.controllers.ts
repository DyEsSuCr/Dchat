import { type RequestExt } from '@/interfaces/request.interface'
import { type Response, type NextFunction } from 'express'
import { ModelMessage } from './messages.services'
import { responseHandler } from '@/libs/response.handler'

export class MessageController {
  static async sendMessage (req: RequestExt, res: Response, next: NextFunction) {
    try {
      const messages = await ModelMessage.sendMessage(req)
      responseHandler(res, 201, messages)
    } catch (err) {
      next(err)
    }
  }

  static async allMessages (req: RequestExt, res: Response, next: NextFunction) {
    try {
      const messages = await ModelMessage.allMessages(req)
      responseHandler(res, 200, messages)
    } catch (err) {
      next(err)
    }
  }
}
