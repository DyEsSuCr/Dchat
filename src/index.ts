import config from '@/config/config'
import { handleErrorMiddleware } from '@/middlewares/error.handler'
import { routes } from '@/router'
import SocketIO from '@/socketio/socket'

import cors from 'cors'
import express from 'express'
import { Server } from 'http'
import morgan from 'morgan'
import { dbConnect } from './database/mongodb/dbConnect'

export class App {
  private readonly app: express.Application
  private readonly port: string

  constructor () {
    this.app = express()
    this.port = config.PORT
    this.middlewares()
    this.routes()
  }

  start (): Server {
    return this.app.listen(this.port, () => {
      console.log(`🆗✅🆗 Server on port ${this.port} 🆗✅🆗`)
    })
  }

  routes () {
    this.app.use(routes)
    this.app.use(handleErrorMiddleware)
  }

  middlewares () {
    this.app.disable('x-powered-by')

    this.app.use(express.json())
    this.app.use(cors({ origin: '*' }))
    this.app.use(morgan('[:date[iso]] (:status) ":method :url HTTP/:http-version" :response-time ms - [:res[content-length]]'))
  }
}

const app = new App()
const server = app.start()
export const socket = new SocketIO(server)

void (async () => {
  await dbConnect()
})()
