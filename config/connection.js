//import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//create the connection to our databases, pass in your MYSQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'F67h3Yp4578jK3', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;