const express = require('express');
const router = express.Router();

// Example route: GET /users
router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

module.exports = router;
