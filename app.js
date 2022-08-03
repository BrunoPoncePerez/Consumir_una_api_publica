require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes/Routes')

const PORT = process.env.PORT || 3200;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/Api', routes);

app.listen(PORT, () => console.log(`escuchando en el puerto: ${PORT}`));