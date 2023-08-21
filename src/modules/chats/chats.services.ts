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

  static async fetchChats ({ user }: RequestExt) {
    let results = await ChatModel.find({ users: { $elemMatch: { $eq: user?.id } } })
      .populate('users', '-password')
      .populate('groupAdmin', '-password')
      .populate('latestMessage')
      .sort({ updatedAt: -1 })

    results = await UserModel.populate(results, {
      path: 'latestMessage.sender',
      select: 'name pic email'
    })

    return results
  }

  static async createGroupChat ({ body, user }: RequestExt) {
    // Please Fill all the feilds
    if (!body.users || !body.name) throw new HTTPError(400, 'ALREADY_USER')

    const users = JSON.parse(body.users)

    // More than 2 users are required to form a group chat
    if (users.length < 2) throw new HTTPError(400, 'ALREADY_USER')

    users.push(user)

    const groupChat = await ChatModel.create({
      users,
      chatName: body.name,
      isGroupChat: true,
      groupAdmin: user
    })

    const fullGroupChat = await ChatModel.findOne({ _id: groupChat._id })
      .populate('users', '-password')
      .populate('groupAdmin', '-password')

    return fullGroupChat
  }

  static async renameGroup ({ body }: RequestExt) {
    const { chatId, chatName } = body

    const updatedChat = await ChatModel.findByIdAndUpdate(
      chatId,
      {
        chatName
      },
      {
        new: true
      }
    )
      .populate('users', '-password')
      .populate('groupAdmin', '-password')

    // Chat Not Found
    if (!updatedChat) throw new HTTPError(404, 'ALREADY_USER')

    return updatedChat
  }

  static async removeFromGroup ({ body }: RequestExt) {
    const { chatId, userId } = body

    // check if the requester is admin

    const removed = await ChatModel.findByIdAndUpdate(
      chatId,
      {
        $pull: { users: userId }
      },
      {
        new: true
      }
    )
      .populate('users', '-password')
      .populate('groupAdmin', '-password')

    // Chat Not Found
    if (!removed) throw new HTTPError(404, 'ALREADY_USER')

    return removed
  }

  static async addToGroup ({ body }: RequestExt) {
    const { chatId, userId } = body

    // check if the requester is admin

    const added = await ChatModel.findByIdAndUpdate(
      chatId,
      {
        $push: { users: userId }
      },
      {
        new: true
      }
    )
      .populate('users', '-password')
      .populate('groupAdmin', '-password')

    // Chat Not Found
    if (!added) throw new HTTPError(404, 'ALREADY_USER')

    return added
  }
}
