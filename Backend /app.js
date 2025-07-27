
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const scamChecker = require('./routes/checkScam');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/check', scamChecker);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
