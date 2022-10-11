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

const createLogin = async (user) => {
  const {
    email, password,
  } = user;
  const checkUser = await userLogin(email, password);
  const { error } = checkUser;
  if (!error) {
    return {
      error: {
        code: StatusCodes.UNAUTHORIZED,
        message: 'Esse email de usuário já possui conta! Tente outro!',
      },
    };
  }

  const create = await User.create(user);
  return create;
};

module.exports = {
  userLogin,
  createLogin,
};
