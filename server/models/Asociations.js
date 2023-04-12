import { User } from './Users.js'
import { Room } from './Rooms.js'
import { Message } from './Messages.js'

User.belongsToMany(Room, { through: 'user_room', timestamps: false })
Room.belongsToMany(User, { through: 'user_room', timestamps: false })

User.hasMany(Message, { foreignKey: 'idUser' })
Message.belongsTo(User, { foreignKey: 'idUser' })

Room.hasMany(Message, { foreignKey: 'idRoom' })
Message.belongsTo(Room, { foreignKey: 'idRoom' })
