const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./route');


routes(app)
app.use(cors());
app.use(express.json());

