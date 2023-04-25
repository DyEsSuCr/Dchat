import { Message } from '../models/Messages.js'
import { User } from '../models/Users.js'
import { Room } from '../models/Rooms.js'
import { response } from '../utils/response.js'

export const sendMessage = async (req, res) => {
  try {
    const user = await User.create({ user: req.body.user })
    const messsage = await Message.create({ message: req.body.message })
    const room = await Room.create()

    await user.setRooms(room.id)
    await room.setUsers(user.id)

    response(res, 200, { messsage, user, room })
  } catch (err) {
    response(res, 400, err)
  }
}

export const getMessagesUserRoom = async (req, res) => {
  const { idUser, idRoom } = req.body

  try {
    const messages = await Message.findAll({
      where: {
        idUser,
        idRoom
      }
    })

    if (messages.length <= 0) return response(res, 200, { message: '0 messages' })

    response(res, 200, messages)
  } catch (err) {
    response(res, 400, err)
  }
}
