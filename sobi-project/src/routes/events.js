const express = require('express');
const pool = require('../utils/db');
const auth = require('../middleware/auth');

const router = express.Router();

// Create event
router.post('/events', auth, async (req, res) => {
  const { title, description, date, location, latitude, longitude } = req.body;

  try {
    await pool.query(
      'INSERT INTO events (user_id, title, description, date, location, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [req.user.id, title, description, date, location, latitude, longitude]
    );

    res.status(201).json({ message: 'Event created' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// Get events
router.get('/events', async (req, res) => {
  try {
    const [events] = await pool.query('SELECT * FROM events');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

module.exports = router;
