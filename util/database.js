const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Vaibhavlal123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
