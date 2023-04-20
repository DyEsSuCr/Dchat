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

export const getMessages = async (req, res) => {
  try {
    res.status(200).json({ messages: 'messages' })
  } catch (err) {
    res.status(400).json(err)
  }
}
