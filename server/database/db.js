import { Sequelize } from 'sequelize'

export const conectionSequelize = new Sequelize({
  dialect: 'sqlite',
  host: './db.sqlite3'
})
