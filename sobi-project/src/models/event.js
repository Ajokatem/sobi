const { DataTypes } = require('sequelize');
const sequelize = require('../config/utilis');

const Event = sequelize.define('Event', {
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  date: DataTypes.DATE,
  description: DataTypes.STRING,
});

module.exports = Event;
