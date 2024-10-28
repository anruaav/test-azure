const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const product = sequelize.define('products', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
    title: {
        type: Sequelize.STRING,
        allowNull: false
      },
    price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    img: {
      allowNull:false,
      type: Sequelize.STRING(300)

    }

})

module.exports = product