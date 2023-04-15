import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const Message = conectionSequelize.define('messages', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  message: {
    type: DataTypes.STRING(),
    allowNull: false
  }
})
