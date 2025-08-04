const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/db');
const logger = require('./middlewares/logger');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

connectToDatabase();

app.use('/api/students', require('./routes/studentRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
