import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'

export const generetaToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '1h' })
