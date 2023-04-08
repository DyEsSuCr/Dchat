import { conectionSequelize } from './database/db.js'
import { PORT } from './config.js'
import server from './app.js'

const main = async () => {
  try {
    await conectionSequelize.sync({ force: false })
    server.listen(PORT, () => {
      console.log(`🆗✅🆗 Server on port ${PORT} 🆗✅🆗`)
    })
  } catch (err) {
    console.error(`🛑⛔ Not connection database ❗${err}❗ ⛔🛑`)
  }
}

main()
