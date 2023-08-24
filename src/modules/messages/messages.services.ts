import { RequestExt } from '@/interfaces/request.interface'
import { HTTPError } from '@/middlewares/error.handler'
import { ChatModel } from '@/models/mongodb/chat.model'
import { MessageModel } from '@/models/mongodb/messages.model'
import { UserModel } from '@/models/mongodb/users.model'

export class ModelMessage {
  static async allMessages ({ params }: RequestExt) {
    const messages = await MessageModel.find({ chat: params.chatId })
      .populate('sender', 'name pic email')
      .populate('chat')

    return messages
  }

  static async sendMessage ({ body, user }: RequestExt) {
    const { content, chatId } = body

    // Invalid data passed into request
    if (!content || !chatId) throw new HTTPError(400, 'ALREADY_USER')

    const newMessage = {
      sender: user?.id,
      content,
      chat: chatId
    }

    let message = await MessageModel.create(newMessage)
    message = await message.populate('sender', 'name pic')
    message = await message.populate('chat')

    const sendMessage = await UserModel.populate(message, {
      path: 'chat.users',
      select: 'name pic email'
    })

    await ChatModel.findByIdAndUpdate(body.chatId, { latestMessage: message })

    return sendMessage
  }
}
