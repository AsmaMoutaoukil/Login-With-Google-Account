const Sequelize = require('sequelize');
const db = require('../database/db')
module.exports = db.sequelize.define(
  'user',
  {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING
    },
    name:{
    type: Sequelize.STRING
  },
  iss_google:{
    type:Sequelize.STRING
  },
  sub_google:{
  type:  Sequelize.STRING
  },
  picture:{
    type: Sequelize.STRING
  },
  },
 
  {
    tableName: 'user',
    timestamps: false
  }
)