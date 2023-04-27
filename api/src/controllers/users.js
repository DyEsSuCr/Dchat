import { getUser, getUsers, insertUser } from '../services/users.js'
import { response, handleHttp } from '../utils/index.js'

export const postCreateUser = async ({ body }, res) => {
  try {
    const user = await insertUser(res, body)
    response(res, 201, user)
  } catch (err) {
    handleHttp(res, 'postCreateUser', err)
  }
}

export const getAllUsers = async (_, res) => {
  try {
    const users = await getUsers()
    response(res, 200, users)
  } catch (err) {
    handleHttp(res, 'getAllUsers', err)
  }
}

export const getOneUser = async ({ params }, res) => {
  try {
    const username = params.username
    const user = await getUser(username)
    const data = user || 'NOT_FOUND'

    response(res, 200, data)
  } catch (err) {
    handleHttp(res, 'getOneUser', err)
  }
}
