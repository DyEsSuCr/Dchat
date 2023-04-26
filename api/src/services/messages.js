import { Message } from '../models/Messages.js'
import { User } from '../models/Users.js'
import { Room } from '../models/Rooms.js'

export const postMessage = async ({ user, message }) => {
  const _user = await User.create({ user })
  const messsage = await Message.create({ message })
  const room = await Room.create()

  await user.setRooms(room.id)
  await room.setUsers(_user.id)

  return { _user, messsage, room }
}

export const getMessagesRoom = async ({ idUser, idRoom }) => {
  const messages = await Message.findAll({
    where: {
      idUser,
      idRoom
    }
  })

  return messages
}
