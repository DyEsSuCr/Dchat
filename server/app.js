import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { PORT } from './config.js'

const app = express()

app.set('port', PORT)

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use((req, res) => {
  res.status(404).json({
    error: 'Rout Not Found'
  })
})

export default app
