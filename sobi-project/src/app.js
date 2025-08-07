const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

let authRoutes, eventRoutes;

// Safe import for authRoutes
try {
  authRoutes = require('./routes/authRoutes');
} catch (err) {
  console.error('Failed to load authRoutes:', err.message);
  authRoutes = express.Router();
}

// Safe import for eventRoutes
try {
  eventRoutes = require('./routes/eventRoutes');
} catch (err) {
  console.error('Failed to load eventRoutes:', err.message);
  eventRoutes = express.Router();
}

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (_req, res) => res.json({ status: 'OK' }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/events', eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const userRoutes = require('./routes/user');
app.use('/api/v1/users', userRoutes);

const healthRoutes = require('./routes/health');
app.use('/api/v1', healthRoutes);

const eventRoutes = require('./routes/eventRoutes');
app.use('/api/v1', eventRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/v1/auth', authRoutes);