// app.js
const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.options('*', cors());
app.use(bodyParser.json());
app.use(cors());
app.use('/tasks', taskRoutes);
// Define other routes for different resources
app.use('/auth', authRoutes);
// app.use('/register', authRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

module.exports = app;
