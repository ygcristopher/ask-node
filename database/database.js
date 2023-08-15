const Sequelize = require('sequelize');

const connection = new Sequelize('ask-node', 'root', '9090',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = connection;