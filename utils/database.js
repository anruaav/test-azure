const Sequelize = require('sequelize')

/* const DB_NAME = 'l01_nodejs'
const USER_NAME = 'root'
const PASSWORD = ''

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})
 */
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'utils/database.sqlite'
});


module.exports = sequelize