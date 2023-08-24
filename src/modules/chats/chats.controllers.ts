import { responseHandler } from '@/libs/response.handler'
import { type NextFunction, type Request, type Response } from 'express'
import { ModelChat } from './chats.services'

export class ChatController {
  static async accessChat (req: Request, res: Response, next: NextFunction) {
    try {
      const FullChat = await ModelChat.accessChat(req)
      responseHandler(res, 201, { FullChat })
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

  static async createGroupChat (req: Request, res: Response, next: NextFunction) {
    try {
      const fullGroupChat = await ModelChat.createGroupChat(req)
      responseHandler(res, 201, { fullGroupChat })
    } catch (err) {
      next(err)
    }
  }

  static async renameGroup (req: Request, res: Response, next: NextFunction) {
    try {
      const updatedChat = await ModelChat.renameGroup(req)
      responseHandler(res, 200, { updatedChat })
    } catch (err) {
      next(err)
    }
  }

  static async removeFromGroup (req: Request, res: Response, next: NextFunction) {
    try {
      const removed = await ModelChat.removeFromGroup(req)
      responseHandler(res, 200, { removed })
    } catch (err) {
      next(err)
    }
  }

  static async addToGroup (req: Request, res: Response, next: NextFunction) {
    try {
      const added = await ModelChat.addToGroup(req)
      responseHandler(res, 200, { added })
    } catch (err) {
      next(err)
    }
  }
}
