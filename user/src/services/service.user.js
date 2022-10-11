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

const createUser = async (user) => {
  const {
    email,
  } = user;
  const checkUser = await User.findOne(
    { where: { email }, attributes: ['email'] },
  );
  if (!checkUser) {
    const create = await User.create(user);
    return create;
  }

  return {
    error: {
      code: StatusCodes.UNAUTHORIZED,
      message: 'Esse email de usuário já possui conta! Tente outro!',
    },
  };
};

module.exports = {
  userLogin,
  createUser,
};
