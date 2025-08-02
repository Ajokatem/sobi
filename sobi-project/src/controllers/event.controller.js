const { getDB } = require('../config/db');

exports.createEvent = async (req, res) => {
  const { title, location, date } = req.body;
  try {
    const db = getDB();
    await db.execute('INSERT INTO events (title, location, date) VALUES (?, ?, ?)', [title, location, date]);
    res.status(201).json({ message: 'Event created' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create event', error: err.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const db = getDB();
    const [events] = await db.execute('SELECT * FROM events');
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch events', error: err.message });
  }
};
