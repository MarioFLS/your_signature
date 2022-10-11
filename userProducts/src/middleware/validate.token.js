const { StatusCodes } = require('http-status-codes');
require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_PASSWORD || 'secret';

const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;
  let tokenUser = authorization?.trim();
  if (authorization?.includes('Bearer')) {
    tokenUser = authorization?.split('Bearer')[1].trim();
  }

  const message = 'Esse token está inválido, não pertece a nenhum usuario';

  if (!authorization) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({
        message: 'Você precisa inserir um token para seguir adiante.',
      });
  }

  try {
    const token = jwt.verify(tokenUser, secret);
    return next(token);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message });
  }
};

module.exports = { tokenValidate };
