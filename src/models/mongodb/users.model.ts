import { User } from '@/interfaces/models.interface'
import { Schema, model } from 'mongoose'

const UserSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    pic: {
      type: String,
      default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    },
    isAdmmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const UserModel = model('User', UserSchema)
