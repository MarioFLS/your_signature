const joi = require('joi');
const StatusCodes = require('http-status-codes');

const requiredItemString = joi.string().not().empty().required();

const validateUser = (req, res, next) => {
  const {
    email, password, name, cpf,
  } = req.body;
  const loginValidation = joi.object({
    name: requiredItemString.min(6),
    email: requiredItemString.email(),
    password: requiredItemString.min(6),
    cpf: joi.string().not().empty().required()
      .min(11)
      .max(11),
  })
    .messages({
      'any.required': 'Insira seus dados corretamente',
      'string.min': 'Seu nome devem ter mais que 6 digitos',
      'string.empty': 'Está faltando algum dado, de uma olhada se você possui name, '
            + 'email, password e saldo inicial',
      'string.email': 'Insira um email valido',
    });

  const { error } = loginValidation.validate({
    email, password, name, cpf,
  });
  const type = error?.details[0].context?.key;
  if (error) {
    if (type === 'password') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'A senha deve ter no minimo 6 digitos' });
    }
    if (type === 'cpf') {
      return res.status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'O CPF deve ter 11 digitos' });
    }
    return res.status(StatusCodes.UNAUTHORIZED)
      .json({ message: error.details[0].message });
  }
  return next();
};

module.exports = { validateUser };
