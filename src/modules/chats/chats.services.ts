import { UserModel } from '@/models/mongodb/users.model'
import { HTTPError } from '@/middlewares/error.handler'
import { ChatModel } from '@/models/mongodb/chat.model'
import { RequestExt } from '@/interfaces/request.interface'

export class ModelChat {
  static async accessChat ({ body, user }: RequestExt) {
    const { userId } = body

    // UserId param not sent with request
    if (!userId) throw new HTTPError(400, 'ALREADY_USER')

    let isChat = await ChatModel.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: user?.id } } },
        { users: { $elemMatch: { $eq: userId } } }
      ]
    })
      .populate('users', '-password')
      .populate('latestMessage')

    isChat = await UserModel.populate(isChat, {
      path: 'latestMessage.sender',
      select: 'name pic email'
    })

    // isChat[0]
    if (isChat.length > 0) throw new HTTPError(400, 'ALREADY_USER')

    const chatData = {
      chatName: 'sender',
      isGroupChat: false,
      users: [user?.id, userId]
    }

    const createdChat = await ChatModel.create(chatData)
    const FullChat = await ChatModel.findOne({ _id: createdChat._id }).populate(
      'users',
      '-password'
    )
    return FullChat
  }
}
