import { Router } from 'express'
import { readdirSync } from 'node:fs'
import { parse, join } from 'node:path'

const PATH_MODULES = join(__dirname, '..', 'modules')

const router = Router()

const cleanFileName = (fileName: string) => parse(fileName).name

readdirSync(PATH_MODULES).forEach((folder) => {
  const routePath = join(PATH_MODULES, folder)

  readdirSync(routePath).forEach((fileName) => {
    const cleanName = cleanFileName(fileName)

    if (cleanName.endsWith('routes')) {
      void import(`${routePath}/${cleanName}`).then((moduleRouter) => {
        router.use(`/${cleanName.split('.').shift()}`, moduleRouter.router)
      })
    }
  })
})

export { router }
