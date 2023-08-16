import config from '@/config/config'
import { router } from '@/router'

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { handleErrorMiddleware } from './middlewares/error.handler'

class Server {
  private readonly app: express.Application
  private readonly port: string

  constructor () {
    this.app = express()
    this.port = config.PORT
    this.routes()
  }

  start () {
    this.app.listen(this.port, () => {
      console.log(`🆗✅🆗 Server on port ${this.port} 🆗✅🆗`)
    })
  }

  routes () {
    this.app.use(router)
    this.app.use(handleErrorMiddleware)
  }

  middlewares () {
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(morgan('dev'))
  }
}

const server = new Server()
server.start()
