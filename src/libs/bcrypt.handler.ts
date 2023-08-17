import { hash, compare } from 'bcryptjs'

export const encrypt = async (password: string) => await hash(password, 8)

export const comparePass = async (password: string, passwordHash: string) => await compare(password, passwordHash)
