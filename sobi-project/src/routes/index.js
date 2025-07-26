const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const authRoutes = require('./authRoutes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/auth', authRoutes);

module.exports = router;
