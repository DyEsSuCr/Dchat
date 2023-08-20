import { responseHandler } from '@/libs/response.handler'
import { type NextFunction, type Request, type Response } from 'express'
import { ModelChat } from './chats.services'

export class ChatController {
  static async obtener (body: Request, res: Response, next: NextFunction) {
    try {
      const FullChat = await ModelChat.accessChat(body)
      responseHandler(res, 200, { FullChat })
    } catch (err) {
      next(err)
    }
  }
}
