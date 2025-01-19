const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const articleRoutes = require('./routes/articleRoutes');

dotenv.config();
const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/mernapp")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/articles', articleRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
