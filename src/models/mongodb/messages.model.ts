import { type Message } from '@/interfaces/models.interface'
import { Schema, model } from 'mongoose'

const MessageSchema = new Schema<Message>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    content: {
      type: String,
      trim: true
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Chat'
    },
    readBy: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const MessageModel = model('User', MessageSchema)
