import { DataTypes } from 'sequelize'
import { hashSync, genSaltSync } from 'bcrypt'

import { conectionSequelize } from '../database/db.js'

export const User = conectionSequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
    set (value) {
      const salt = genSaltSync(10)
      const hash = hashSync(value, salt)

      this.setDataValue('password', hash)
    }
  },
  username: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  }
})
