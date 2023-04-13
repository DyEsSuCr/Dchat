import { config } from 'dotenv'

config()

export const PORT = process.env.PORT
export const HOST = process.env.HOST
export const DIALECT = process.env.DIALECT
export const SECRET = process.env.SECRET
