import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'

export const userExtractor = async (req, res, next) => {
  const authorization = req.headers.token
  let token = ''

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  const decodedToken = jwt.verify(token, SECRET)

  if (!token || !decodedToken) return res.status(401).json({ erro: 'token missing o invalid' })

  const { id: userId } = decodedToken

  req.userId = userId

  next()
}
