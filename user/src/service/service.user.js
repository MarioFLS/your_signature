const StatusCodes = require('http-status-codes');
const { User } = require('../models');

const userLogin = async (email, password) => {
  const result = await User.findOne(
    { where: { email, password }, attributes: ['id', 'email', 'cpf'] },
  );
  if (!result) {
    return {
      error: {
        code: StatusCodes.UNAUTHORIZED,
        message: 'Seu email ou senha estão incorretos.',
      },
    };
  }
  return result;
};

module.exports = {
  userLogin,
};
