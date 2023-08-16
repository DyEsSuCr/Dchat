import config from '@/config/config'
import { handleErrorMiddleware } from '@/middlewares/error.handler'
import { routes } from '@/router'

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

class App {
  private readonly app: express.Application
  private readonly port: string

  constructor () {
    this.app = express()
    this.port = config.PORT
    this.middlewares()
    this.routes()
  }

  start () {
    this.app.listen(this.port, () => {
      console.log(`🆗✅🆗 Server on port ${this.port} 🆗✅🆗`)
    })
  }

  routes () {
    this.app.use('/api', routes)
    this.app.use(handleErrorMiddleware)
  }

  middlewares () {
    this.app.disable('x-powered-by')

    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(morgan('dev'))
  }
}

const app = new App()
app.start()
