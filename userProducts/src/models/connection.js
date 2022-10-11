const mongoose = require('mongoose');

const database = () => mongoose.createConnection('mongodb://root:password@localhost:7000');

const closeDatabase = () => database().close();

module.exports = { database, closeDatabase };
