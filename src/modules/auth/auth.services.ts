import { UserModel } from '@/models/mongodb/users.model'
import { comparePass, encrypt } from '@/libs/bcrypt.handler'
import { generateToken } from '@/libs/jwt.handle'
import { HTTPError } from '@/middlewares/error.handler'

export class ModelAuth {
  static async register ({ email, password, username }: { email: string, password: string, username: string }) {
    const userFound = await UserModel.findOne({ $or: [{ email }, { username }] })
    if (userFound) throw new HTTPError(409, 'ALREADY_USER')

    const passwordHash = await encrypt(password)

    const registeredUser = await UserModel.create({
      email,
      password: passwordHash,
      username
    })

    return {
      id: registeredUser.id,
      username: registeredUser.username,
      email: registeredUser.email
    }
  }

  static async login ({ email, password }: { email: string, password: string }) {
    const userFound = await UserModel.findOne({ email })
    if (!userFound) throw new HTTPError(404, 'USER_NOT_FOUND')

    const matchPassowrd = await comparePass(password, userFound.password)
    if (!matchPassowrd) throw new HTTPError(401, 'PASSWORD_INCORRECT')

    const token = generateToken(userFound.id)

    return {
      token,
      user: {
        id: userFound.id,
        username: userFound.username,
        email: userFound.email
      }
    }
  }
}
