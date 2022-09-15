const express = require('express');
const app = express();
const bodyparser = require("body-parser")


// Import routes
const blogRoute = require('./routes/blog');


//Router MIddlewares
app.use(bodyparser.json())
app.use(express.json());
app.use('/', blogRoute);

module.exports = app;
