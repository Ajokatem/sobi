const mysql = require('mysql2/promise');

let pool;

const connectDB = async () => {
  try {
    pool = await mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    console.log('MySQL connected');
  } catch (error) {
    console.error('MySQL connection failed:', error.message);
    process.exit(1);
  }
};

const getDB = () => pool;

module.exports = { connectDB, getDB };
