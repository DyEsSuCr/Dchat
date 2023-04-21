import { Message } from '../models/Messages.js'
import { User } from '../models/Users.js'
import { Room } from '../models/Rooms.js'

export const sendMessage = async (req, res) => {
  try {
    const user = await User.create({ user: req.body.user })
    const messsage = await Message.create({ message: req.body.message })
    const room = await Room.create()

    await user.setRooms(room.id)
    await room.setUsers(user.id)

    res.status(200).json({ messsage, user, room })
  } catch (err) {
    res.status(400).json(err)
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

    if (messages.length <= 0) return res.status(200).json({ message: '0 messages' })

    res.status(200).json(messages)
  } catch (err) {
    res.status(400).json(err)
  }
}
