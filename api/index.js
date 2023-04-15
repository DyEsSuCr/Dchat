import { conectionSequelize } from './server/database/db.js'
import { PORT } from './server/config.js'
import server from './server/app.js'

import './server/models/Asociations.js'

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
