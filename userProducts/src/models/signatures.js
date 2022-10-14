const mongoose = require('mongoose');
const { database } = require('./connection');

const userProductsSchema = mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    memory: {
      type: Number,
      required: true,
    },
    signedIn: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false },
);

const Signatures = database().model('signatures', userProductsSchema);

module.exports = { userProductsSchema, Signatures };
