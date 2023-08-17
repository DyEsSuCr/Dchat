import { Schema } from 'mongoose'

export interface Chat {
  chatName: Schema.Types.ObjectId
  isGroupChat: boolean
  users: Schema.Types.ObjectId
  latestMessage: Schema.Types.ObjectId
  groupAdmin: Schema.Types.ObjectId
}

export interface Message {
  sender: Schema.Types.ObjectId
  content: string
  chat: Schema.Types.ObjectId
  readBy: Schema.Types.ObjectId
}

export interface User {
  username: string
  email: string
  password: string
  pic: string
  isAdmmin: boolean
}
