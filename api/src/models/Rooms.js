import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const Room = conectionSequelize.define('rooms', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  }
})
