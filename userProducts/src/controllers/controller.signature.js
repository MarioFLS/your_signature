const { createNewSignature } = require('../services/service.signature');

const newSignature = (req, res) => {
  const { authorization } = req.headers;
  const response = createNewSignature(authorization, req.body);

  return res.status(200).json(response);
};

module.exports = { newSignature };
