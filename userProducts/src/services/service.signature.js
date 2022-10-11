const { Signatures } = require('../models/signatures');

const createNewSignature = async (signature) => Signatures.create(signature);

module.exports = { createNewSignature };
