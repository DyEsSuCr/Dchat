import config from '@/config/config'
import { JwtPayload, sign, verify } from 'jsonwebtoken'

export const generateToken = (id: string) => sign(id, config.JWT_SECRET)

export const verifyToken = (token: string) => {
  let result: string | JwtPayload | undefined

  verify(token, config.JWT_SECRET, function (err, decoded) {
    if (!err) {
      result = decoded
    } else {
      console.log(`messageError: ${err.message} nameError: ${err.name}`)
    }
  })

  return result
}
