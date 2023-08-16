import { type Response } from 'express'

export const responseHandler = (res: Response, status: number, data: string | object | any[]) => res.status(status).json(data)
