const express = require('express');
const bodyparser = require('body-parser');
const UserRouter = require('./routes/userroutes')

const app = express();
app.use(bodyparser.json());
//accept json from frontend
app.use('/', UserRouter);

module.exports = app