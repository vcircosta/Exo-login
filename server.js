const express = require('express');
const { PORT } = require('./config/config');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
