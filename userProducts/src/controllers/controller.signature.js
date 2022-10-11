const { createNewSignature } = require('../services/service.signature');

const newSignature = async (token, req, res, _next) => {
  const signatures = req.body;
  await Promise.all(signatures
    .map((signature) => createNewSignature({ userId: token.id, ...signature })));

  return res.status(200).json({ message: 'Sucesso' });
};

module.exports = { newSignature };
