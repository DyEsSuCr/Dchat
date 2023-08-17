import config from '@/config/config'
import { HTTPError } from '@/middlewares/error.handler'
import mongoose from 'mongoose'

export const dbConnect = async () => {
  try {
    const db = await mongoose.connect(config.URI_MONGO)
    console.log(`🚀🚀 DB connected to ${db.connection.host} 🚀🚀`)
  } catch (err) {
    throw new HTTPError(500, '⛔⛔ Failed Connection DB ⛔⛔')
  }
}
