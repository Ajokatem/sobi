const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../utils/db');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [existing] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) return res.status(400).json({ error: 'User already exists' });

    await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!user.length) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user[0].password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user[0].id, email: user[0].email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;


