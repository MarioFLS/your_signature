const mongoose = require('mongoose');
const { database } = require('./connection');

const userProductsSchema = mongoose.Schema(
  {
    userId: Number,
    userEmail: String,
    quantity: Number,
    productId: Number,
    productName: String,
    productImage: String,
    signedIn: Date,
  },
  { versionKey: false },
);

const Signatures = database().model('signatures', userProductsSchema);

module.exports = { userProductsSchema, Signatures };
