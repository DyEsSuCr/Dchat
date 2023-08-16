import { type Response } from 'express'

export const responseHandler = (res: Response, status: number, data: string | Object | any[]) => res.status(status).json(data)
