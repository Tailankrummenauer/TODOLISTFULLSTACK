const express = require('express');
const router = require('./routes/router')
const cors = require('cores')

const app = express();
app.use(express.json());
app.use(cors());
app.use(router)


module.exports = app;