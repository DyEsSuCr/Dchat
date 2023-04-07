import express from 'express'
import { PORT } from './config.js'

const app = express()

app.set('port', PORT)

try {
  app.listen(app.get('port'), () => {
    console.log(`server in port ${app.get('port')}`)
  })
} catch (err) {
  console.log(err)
}
