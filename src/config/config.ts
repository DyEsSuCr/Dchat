import { config } from 'dotenv'

config()

export default {
  PORT: process.env.PORT ?? '3000',
  JWT_SECRET: process.env.JWT_SECRET ?? 'JWT',
  URI_MONGO: process.env.URI_MONGO ?? 'localhost'
}
