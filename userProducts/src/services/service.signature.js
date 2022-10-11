const { Signatures } = require('../models/signatures');

const createNewSignature = async (token, signature) => Signatures.create(signature);

module.exports = { createNewSignature };
