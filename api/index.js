import { conectionSequelize } from './src/database/db.js'
import { PORT } from './src/config.js'
import server from './src/app.js'

import './src/models/Asociations.js'

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
