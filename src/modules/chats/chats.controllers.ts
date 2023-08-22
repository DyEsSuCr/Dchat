import { responseHandler } from '@/libs/response.handler'
import { type NextFunction, type Request, type Response } from 'express'
import { ModelChat } from './chats.services'

export class ChatController {
  static async accessChat (req: Request, res: Response, next: NextFunction) {
    try {
      const FullChat = await ModelChat.accessChat(req)
      responseHandler(res, 200, { FullChat })
    } catch (err) {
      next(err)
    }
  }

  static async fetchChats (req: Request, res: Response, next: NextFunction) {
    try {
      const results = await ModelChat.fetchChats(req)
      responseHandler(res, 200, { results })
    } catch (err) {
      next(err)
    }
  }
}
