const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = []
let greenhouses = []
let plants = {};
let tasks = {};
let plantInventory = { 'monstera': 0, 'daisy': 0, 'laceleaf': 0 };
let potInventory = { 'terracotta': 0, 'marble': 0, 'hanging': 0 };
let foodInventory = { 'food': 0, 'water': 0 };

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

// var apiRouter = express.Router();
let apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.get('*', (_req, res) => {
  res.send({ msg: 'Plantr service' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});