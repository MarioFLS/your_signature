const {
  createNewSignature,
  getSignatureByUserID,
} = require('../services/service.signature');

const newSignature = async (token, req, res, _next) => {
  const signatures = req.body;
  await Promise.all(signatures
    .map((signature) => createNewSignature({ userId: token.id, ...signature })));

  return res.status(201).json({ message: 'Sucesso' });
};

const getSignatures = async (token, _req, res, _next) => {
  const response = await getSignatureByUserID(token.id);
  return res.status(200).json(response);
};

module.exports = { newSignature, getSignatures };
