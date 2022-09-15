const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');

dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to DB")
})
// mongoose.connect('mongodb://localhost:3000')
// process.env.DATABASE_URL

app.listen(3000, () => console.log('Server running......'));

