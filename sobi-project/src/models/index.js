const sequelize = require('../config/utilis');
const User = require('./user');
const Event = require('./event');

sequelize.sync();

module.exports = { sequelize, User, Event };
