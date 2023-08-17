import config from '@/config/config'
import mongoose from 'mongoose'

export const dbConnect = async () => {
  try {
    const db = await mongoose.connect(config.URI_MONGO)
    console.log(`🚀🚀 DB connected to ${db.connection.host} 🚀🚀`)
  } catch (err) {
    console.log('⛔⛔ Failed Connection DB ⛔⛔')
  }
}
