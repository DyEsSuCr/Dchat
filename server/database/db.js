import { Sequelize } from 'sequelize'
import { DIALECT, HOST } from '../config.js'

export const conectionSequelize = new Sequelize({
  dialect: DIALECT,
  host: HOST
})
