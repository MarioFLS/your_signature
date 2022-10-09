const StatusCodes = require('http-status-codes');
const { generateToken } = require('../helpers/generateToken');
const { userLogin } = require('../service/service.user');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const response = await userLogin(email, password);
  const { error } = response;
  if (error) { return next(response); }

  const token = generateToken(response);
  return res.status(StatusCodes.OK).json({ token });
};

module.exports = { login };
