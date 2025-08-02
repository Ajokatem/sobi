const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const eventRoutes = require('./routes/event.routes');
const { connectDB } = require('./config/db');
const appInsights = require("applicationinsights");
appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY).start();
const healthRoute = require('./routes/health');
app.use('/api/v1', healthRoute);
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

app.get('/', (req, res) => res.send('Sobi API is running'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

