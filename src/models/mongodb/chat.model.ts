import { type Chat } from '@/interfaces/models.interface'
import { Schema, model } from 'mongoose'

const ChatSchema = new Schema<Chat>(
  {
    chatName: {
      type: String,
      trim: true
    },
    isGroupChat: {
      type: Boolean,
      default: false
    },
    users: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    },
    groupAdmin: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

export const ChatModel = model('Chat', ChatSchema)
