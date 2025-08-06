const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (_req, res) => res.json({ status: 'OK' }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/events', eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
