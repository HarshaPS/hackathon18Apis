import express from 'express';
import HackathonRoutes from './routes/hackathonRouter';

const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const config = require('./config/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name)
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.use('/api', HackathonRoutes());

app.listen("8080", () => {
  console.log('API Backend started on port ' + 8080);
});
