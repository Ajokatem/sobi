const { Event } = require('../models');

exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch {
    res.status(500).json({ error: 'Create failed' });
  }
};

exports.getEvents = async (_req, res) => {
  const events = await Event.findAll();
  res.json(events);
};

exports.getEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  event ? res.json(event) : res.status(404).json({ error: 'Not found' });
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  if (!event) return res.status(404).json({ error: 'Not found' });
  await event.update(req.body);
  res.json(event);
};

exports.deleteEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  if (!event) return res.status(404).json({ error: 'Not found' });
  await event.destroy();
  res.json({ message: 'Deleted' });
};

