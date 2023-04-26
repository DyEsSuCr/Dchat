import { postMessage, getMessagesRoom } from '../services/messages.js'
import { response, handleHttp } from '../utils/index.js'

export const sendMessage = async ({ body }, res) => {
  try {
    const message = await postMessage(body)
    response(res, 200, message)
  } catch (err) {
    handleHttp(res, 'sendMessage', err)
  }
}

export const getMessagesUserRoom = async ({ body }, res) => {
  try {
    const messages = await getMessagesRoom(body)
    response(res, 200, messages)
  } catch (err) {
    handleHttp(res, 'getMessagesUserRoom', err)
  }
}
