const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.json());
app.use('/api', router); // All routes start with /api

module.exports = app;
const PORT = process.env.PORT || 3000;