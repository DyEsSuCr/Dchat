import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/db.js'

export const User = conectionSequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  username: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  }
})
