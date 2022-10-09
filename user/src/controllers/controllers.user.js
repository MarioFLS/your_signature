const StatusCodes = require('http-status-codes');
const { generateToken } = require('../helpers/generateToken');
const { userLogin, createLogin } = require('../service/service.user');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const response = await userLogin(email, password);
  const { error } = response;
  if (error) { return next(response); }

  const token = generateToken(response);
  return res.status(StatusCodes.OK).json({ token });
};

const create = async (req, res, next) => {
  const response = await createLogin(req.body).catch((e) => console.log(e));
  const { error } = response;
  if (error) { return next(response); }

  const token = generateToken(response);
  return res.status(StatusCodes.CREATED).json({ token });
};

module.exports = { login, create };
