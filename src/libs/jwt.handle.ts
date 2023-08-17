import config from '@/config/config'
import { sign, verify } from 'jsonwebtoken'

export const generateToken = (id: string) => sign(id, config.JWT_SECRET)

export const verifyToken = (token: string) => {
  try {
    return verify(token, config.JWT_SECRET)
  } catch (err) {
    console.log(err)
  }
}
