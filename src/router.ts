import { Router } from 'express'
import { readdirSync } from 'node:fs'
import { parse, join } from 'node:path'

const pathModules = join(__dirname, 'modules')

const routes = Router()

const cleanFileName = (fileName: string) => parse(fileName).name

readdirSync(pathModules).forEach((folder) => {
  const pathRoute = join(pathModules, folder)

  readdirSync(pathRoute).forEach((fileName) => {
    const cleanName = cleanFileName(fileName)

    if (cleanName.endsWith('routes')) {
      void import(`${pathRoute}/${cleanName}`).then((moduleRouter) => {
        routes.use(`/api/${cleanName.split('.').shift()}`, moduleRouter.router)
      })
    }
  })
})

export { routes }
