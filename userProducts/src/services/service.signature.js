const { Signatures } = require('../models/signatures');

const createNewSignature = async (signature) => Signatures.create(signature);

const getSignatureByUserID = async (userId) => Signatures.find({ userId });

module.exports = { createNewSignature, getSignatureByUserID };
