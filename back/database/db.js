require('dotenv').config();
const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize(process.env.DATABASE,process.env.USER_DATABASE,process.env.PASSWORD ,{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
})

db.sequelize = sequelize;
module.exports = db